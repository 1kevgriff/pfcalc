import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useAllocationStore = defineStore('allocation', () => {
  const defaultAllocations = [
    { id: 'profit', name: 'Profit', percentage: 5, color: 'bg-profit-green' },
    { id: 'owners-pay', name: "Owner's Pay", percentage: 50, color: 'bg-owner-purple' },
    { id: 'tax', name: 'Tax', percentage: 15, color: 'bg-tax-blue' },
    { id: 'opex', name: 'Operating Expenses', percentage: 30, color: 'bg-opex-orange' }
  ]

  const allocations = ref(loadAllocations())
  const incomeAmount = ref(loadIncomeAmount())

  function loadAllocations() {
    const saved = localStorage.getItem('pfcalc-allocations')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed
        }
      } catch (e) {
        console.error('Failed to load allocations from localStorage:', e)
      }
    }
    return [...defaultAllocations]
  }

  function loadIncomeAmount() {
    const saved = localStorage.getItem('pfcalc-income')
    if (saved) {
      try {
        const amount = parseFloat(saved)
        if (!isNaN(amount) && amount >= 0) {
          return amount
        }
      } catch (e) {
        console.error('Failed to load income amount from localStorage:', e)
      }
    }
    return 0
  }

  function saveAllocations() {
    localStorage.setItem('pfcalc-allocations', JSON.stringify(allocations.value))
  }

  function saveIncomeAmount() {
    localStorage.setItem('pfcalc-income', incomeAmount.value.toString())
  }

  watch(allocations, saveAllocations, { deep: true })
  watch(incomeAmount, saveIncomeAmount)

  const totalPercentage = computed(() => {
    return allocations.value.reduce((sum, alloc) => sum + alloc.percentage, 0)
  })

  const isValid = computed(() => {
    return Math.abs(totalPercentage.value - 100) < 0.01
  })

  const calculatedAmounts = computed(() => {
    return allocations.value.map(alloc => ({
      ...alloc,
      amount: (incomeAmount.value * alloc.percentage) / 100
    }))
  })

  function updateAllocation(id, percentage) {
    const allocation = allocations.value.find(a => a.id === id)
    if (allocation) {
      allocation.percentage = Math.max(0, Math.min(100, percentage))
    }
  }

  function addAllocation(name) {
    const id = name.toLowerCase().replace(/\s+/g, '-')
    const colors = ['bg-green-500', 'bg-blue-500', 'bg-purple-500', 'bg-orange-500', 'bg-pink-500', 'bg-yellow-500']
    const color = colors[allocations.value.length % colors.length]
    
    allocations.value.push({
      id,
      name,
      percentage: 0,
      color
    })
  }

  function removeAllocation(id) {
    const index = allocations.value.findIndex(a => a.id === id)
    if (index > -1) {
      allocations.value.splice(index, 1)
    }
  }

  function resetToDefaults() {
    allocations.value = [...defaultAllocations]
    saveAllocations()
  }

  function updateAllocationName(id, newName) {
    const allocation = allocations.value.find(a => a.id === id)
    if (allocation) {
      allocation.name = newName
    }
  }

  return {
    allocations,
    incomeAmount,
    totalPercentage,
    isValid,
    calculatedAmounts,
    updateAllocation,
    addAllocation,
    removeAllocation,
    resetToDefaults,
    updateAllocationName
  }
})