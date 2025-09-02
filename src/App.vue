<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-bold text-gray-900">
              <span class="text-green-500">PF</span>Calc
            </h1>
            <span class="ml-3 text-sm text-gray-500">Profit First Calculator</span>
          </div>
          <div class="flex items-center space-x-4">
            <router-link
              to="/"
              class="px-3 py-2 rounded-md text-sm font-medium"
              :class="[$route.path === '/' ? 'bg-green-500 text-white' : 'text-gray-700 hover:text-gray-900']"
            >
              Calculator
            </router-link>
            <router-link
              to="/config"
              class="px-3 py-2 rounded-md text-sm font-medium"
              :class="[$route.path === '/config' ? 'bg-green-500 text-white' : 'text-gray-700 hover:text-gray-900']"
            >
              Configuration
            </router-link>
            <router-link
              to="/about"
              class="px-3 py-2 rounded-md text-sm font-medium"
              :class="[$route.path === '/about' ? 'bg-green-500 text-white' : 'text-gray-700 hover:text-gray-900']"
            >
              About
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <router-view />
    </main>

    <footer class="mt-auto py-4 text-center text-sm text-gray-500">
      <p>
        Created by <router-link to="/about" class="text-green-500 hover:text-green-700 font-medium">Kevin Griffin</router-link> 
        | Based on <a href="https://profitfirstbook.com" target="_blank" rel="noopener noreferrer" class="text-green-500 hover:text-green-700 font-medium">Profit First</a> by Mike Michalowicz
      </p>
    </footer>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const $route = useRoute()
</script>