<template>
  <div class="relative p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-[1.02] card-shine group">
    <div class="flex items-center justify-between relative z-10">
      <div class="flex items-center space-x-3">
        <div class="relative">
          <div :class="allocation.color" class="w-5 h-5 rounded-full animate-pulse-subtle"></div>
          <div :class="allocation.color" class="w-5 h-5 rounded-full absolute inset-0 opacity-50 blur-sm"></div>
        </div>
        <span class="font-semibold text-gray-900 group-hover:text-gradient transition-all duration-300">{{ allocation.name }}</span>
      </div>
      <div class="flex items-center space-x-8">
        <div class="text-center">
          <span class="text-2xl font-bold text-gradient">{{ allocation.percentage }}%</span>
        </div>
        <span class="text-lg font-bold text-gray-900 w-32 text-right group-hover:scale-105 transition-transform">
          ${{ animatedAmount }}
        </span>
      </div>
    </div>
    
    <div class="mt-3 progress-bar h-2">
      <div 
        class="progress-fill"
        :style="{ width: progressWidth + '%' }"
      ></div>
    </div>
    
    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <svg class="absolute -right-4 -top-4 w-24 h-24 text-green-500/5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
        <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"/>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  allocation: {
    type: Object,
    required: true
  },
  income: {
    type: Number,
    required: true
  }
})

const displayAmount = ref(0)
const animatedAmount = computed(() => 
  displayAmount.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
)

const progressWidth = computed(() => Math.min(props.allocation.percentage, 100))

function animateValue(start, end, duration = 500) {
  const startTime = performance.now()
  
  function update(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    displayAmount.value = start + (end - start) * easeOutQuad(progress)
    
    if (progress < 1) {
      requestAnimationFrame(update)
    } else {
      displayAmount.value = end
    }
  }
  
  requestAnimationFrame(update)
}

function easeOutQuad(t) {
  return t * (2 - t)
}

watch(() => props.allocation.amount, (newValue, oldValue) => {
  animateValue(oldValue || 0, newValue)
}, { immediate: true })
</script>