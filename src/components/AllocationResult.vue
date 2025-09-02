<template>
  <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
    <div class="flex items-center space-x-3">
      <div :class="allocation.color" class="w-4 h-4 rounded-full"></div>
      <span class="font-medium text-gray-900">{{ allocation.name }}</span>
    </div>
    <div class="flex items-center space-x-8">
      <span class="text-gray-600 font-medium">{{ allocation.percentage }}%</span>
      <span class="text-lg font-semibold text-gray-900 w-32 text-right">
        ${{ allocation.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  allocation: {
    type: Object,
    required: true
  },
  income: {
    type: Number,
    required: true
  }
})
</script>