<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/20 to-gray-50 relative">
    <div class="pattern-dots absolute inset-0 pointer-events-none"></div>
    <nav class="glass-effect shadow-lg border-b border-white/20 relative z-10 animate-slideIn">
      <div class="gradient-bg absolute inset-0 opacity-90"></div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold flex items-center">
              <span class="text-gradient animate-pulse-subtle">PF</span>
              <span class="text-white ml-1">Calc</span>
              <svg class="w-6 h-6 ml-2 text-white/80 animate-float" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"/>
              </svg>
            </h1>
            <span class="ml-3 text-sm text-white/80 hidden sm:inline">Profit First Calculator</span>
          </div>
          <div class="flex items-center space-x-2">
            <router-link
              to="/"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2"
              :class="[$route.path === '/' ? 'bg-white/20 text-white shadow-lg scale-105' : 'text-white/90 hover:bg-white/10 hover:text-white']"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
              </svg>
              <span>Calculator</span>
            </router-link>
            <router-link
              to="/config"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2"
              :class="[$route.path === '/config' ? 'bg-white/20 text-white shadow-lg scale-105' : 'text-white/90 hover:bg-white/10 hover:text-white']"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
              </svg>
              <span>Config</span>
            </router-link>
            <router-link
              to="/about"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2"
              :class="[$route.path === '/about' ? 'bg-white/20 text-white shadow-lg scale-105' : 'text-white/90 hover:bg-white/10 hover:text-white']"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
              </svg>
              <span>About</span>
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="mt-auto py-6 text-center text-sm relative z-10">
      <div class="glass-effect rounded-lg max-w-2xl mx-auto px-6 py-3 shadow-lg">
        <p class="text-gray-700">
          Created by <router-link to="/about" class="text-gradient font-semibold hover:opacity-80 transition-opacity">Kevin Griffin</router-link> 
          <span class="mx-2 text-gray-400">|</span>
          Based on <a href="https://profitfirstbook.com" target="_blank" rel="noopener noreferrer" class="text-gradient font-semibold hover:opacity-80 transition-opacity">Profit First</a> by Mike Michalowicz
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const $route = useRoute()
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>