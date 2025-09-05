<template>
  <div class="group relative flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.01] animate-slideIn">
    <div class="relative">
      <div :class="allocation.color" class="w-5 h-5 rounded-full flex-shrink-0 animate-pulse-subtle"></div>
      <div :class="allocation.color" class="w-5 h-5 rounded-full absolute inset-0 opacity-50 blur-sm"></div>
    </div>
    
    <input
      :value="allocation.name"
      @input="$emit('update-name', $event.target.value)"
      type="text"
      class="flex-1 px-4 py-2.5 bg-white/70 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent input-glow transition-all duration-300 font-medium"
      placeholder="Account name"
    >
    
    <div class="flex items-center space-x-2">
      <div class="relative">
        <input
          :value="allocation.percentage"
          @input="updatePercentage($event.target.value)"
          type="number"
          min="0"
          max="100"
          step="0.1"
          class="w-24 px-3 py-2.5 bg-white/70 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-center input-glow transition-all duration-300 font-semibold text-lg"
        >
        <div class="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <span class="text-gray-600 font-bold text-lg">%</span>
    </div>

    <transition name="fade">
      <button
        v-if="canRemove"
        @click="handleRemove"
        class="p-2.5 text-red-500 hover:bg-red-50 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-12"
        title="Remove account"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
        </svg>
      </button>
      <div v-else class="w-9"></div>
    </transition>
    
    <div class="absolute -inset-px bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
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

function handleRemove() {
  emit('remove')
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>