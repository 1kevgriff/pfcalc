<template>
  <div class="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
    <div :class="allocation.color" class="w-4 h-4 rounded-full flex-shrink-0"></div>
    
    <input
      :value="allocation.name"
      @input="$emit('update-name', $event.target.value)"
      type="text"
      class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-profit-green focus:border-transparent"
      placeholder="Allocation name"
    >
    
    <div class="flex items-center space-x-2">
      <input
        :value="allocation.percentage"
        @input="updatePercentage($event.target.value)"
        type="number"
        min="0"
        max="100"
        step="0.1"
        class="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-profit-green focus:border-transparent text-center"
      >
      <span class="text-gray-600 font-medium">%</span>
    </div>

    <button
      v-if="canRemove"
      @click="$emit('remove')"
      class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
      title="Remove allocation"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
      </svg>
    </button>
    <div v-else class="w-9"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  allocation: {
    type: Object,
    required: true
  },
  canRemove: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update', 'update-name', 'remove'])

function updatePercentage(value) {
  const percentage = parseFloat(value) || 0
  emit('update', percentage)
}
</script>