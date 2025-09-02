<template>
  <div class="space-y-8">
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-900">Configure Allocations</h2>
        <button
          @click="store.resetToDefaults"
          class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          Reset to Defaults
        </button>
      </div>

      <div v-if="!store.isValid" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
        <div class="flex items-center">
          <svg class="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
          </svg>
          <span class="text-red-800">
            Total percentage must equal 100% (currently {{ store.totalPercentage }}%)
          </span>
        </div>
      </div>

      <div class="space-y-4">
        <div class="text-sm text-gray-600 font-medium px-2">
          Adjust the percentages below to match your business needs:
        </div>

        <AllocationInput
          v-for="allocation in store.allocations"
          :key="allocation.id"
          :allocation="allocation"
          @update="store.updateAllocation(allocation.id, $event)"
          @update-name="store.updateAllocationName(allocation.id, $event)"
          @remove="store.removeAllocation(allocation.id)"
          :can-remove="store.allocations.length > 1"
        />
      </div>

      <div class="mt-6 pt-6 border-t border-gray-200">
        <div class="flex justify-between items-center mb-4">
          <span class="text-lg font-semibold text-gray-900">Total Percentage</span>
          <span class="text-lg font-semibold" :class="store.isValid ? 'text-green-600' : 'text-red-600'">
            {{ store.totalPercentage }}%
          </span>
        </div>

        <div class="flex items-center space-x-3">
          <input
            v-model="newAllocationName"
            @keyup.enter="addNewAllocation"
            type="text"
            placeholder="New allocation name"
            class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-profit-green focus:border-transparent"
          >
          <button
            @click="addNewAllocation"
            :disabled="!newAllocationName.trim()"
            class="px-4 py-2 bg-profit-green text-white font-medium rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Add Allocation
          </button>
        </div>
      </div>
    </div>

    <div class="bg-green-50 rounded-lg p-6">
      <h3 class="text-lg font-semibold text-green-900 mb-3">Profit First Guidelines</h3>
      <div class="space-y-2 text-sm text-green-800">
        <p class="font-medium">Recommended allocations for businesses under $250K revenue:</p>
        <ul class="space-y-1 ml-4">
          <li>• <span class="font-medium">Profit:</span> 5%</li>
          <li>• <span class="font-medium">Owner's Pay:</span> 50%</li>
          <li>• <span class="font-medium">Tax:</span> 15%</li>
          <li>• <span class="font-medium">Operating Expenses:</span> 30%</li>
        </ul>
        <p class="mt-3 text-xs">
          These percentages should be adjusted based on your specific business model, industry, and revenue level.
        </p>
      </div>
    </div>

    <div class="bg-blue-50 rounded-lg p-4">
      <div class="flex items-center">
        <svg class="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
        </svg>
        <p class="text-sm text-blue-800">
          Your configuration is automatically saved to your browser's local storage.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAllocationStore } from '../stores/allocation'
import AllocationInput from '../components/AllocationInput.vue'

const store = useAllocationStore()
const newAllocationName = ref('')

function addNewAllocation() {
  if (newAllocationName.value.trim()) {
    store.addAllocation(newAllocationName.value.trim())
    newAllocationName.value = ''
  }
}
</script>