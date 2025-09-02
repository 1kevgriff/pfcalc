<template>
  <div class="space-y-8">
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Calculate Your Allocations</h2>
      
      <div class="mb-8">
        <label for="income" class="block text-sm font-medium text-gray-700 mb-2">
          Income Account Balance
        </label>
        <div class="relative">
          <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
          <input
            id="income"
            v-model.number="store.incomeAmount"
            type="number"
            min="0"
            step="0.01"
            class="pl-8 w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
            placeholder="0.00"
          >
        </div>
        <p class="mt-2 text-sm text-gray-500">
          Enter the total amount from your income account to calculate allocations
        </p>
      </div>

      <div v-if="!store.isValid" class="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div class="flex items-center">
          <svg class="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
          </svg>
          <span class="text-yellow-800">
            Percentages must equal 100% (currently {{ store.totalPercentage }}%)
          </span>
        </div>
      </div>

      <div class="space-y-4">
        <div class="flex items-center justify-between text-sm text-gray-600 font-medium px-2">
          <span>Category</span>
          <div class="flex items-center space-x-8">
            <span>Percentage</span>
            <span class="w-32 text-right">Amount</span>
          </div>
        </div>

        <AllocationResult
          v-for="allocation in store.calculatedAmounts"
          :key="allocation.id"
          :allocation="allocation"
          :income="store.incomeAmount"
        />
      </div>

      <div v-if="store.incomeAmount > 0" class="mt-6 pt-6 border-t border-gray-200">
        <div class="flex justify-between items-center">
          <span class="text-lg font-semibold text-gray-900">Total</span>
          <div class="flex items-center space-x-8">
            <span class="text-lg font-semibold" :class="store.isValid ? 'text-green-600' : 'text-red-600'">
              {{ store.totalPercentage }}%
            </span>
            <span class="text-lg font-semibold text-gray-900 w-32 text-right">
              ${{ store.incomeAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <div class="bg-green-50 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-green-900 mb-3 flex items-center">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          Your Privacy Matters
        </h3>
        <ul class="space-y-2 text-green-800 text-sm">
          <li class="flex items-start">
            <span class="text-green-600 mr-2">✓</span>
            <span>No sign-up or personal information required</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 mr-2">✓</span>
            <span>No tracking or analytics - your data stays private</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 mr-2">✓</span>
            <span>Works completely offline once loaded</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 mr-2">✓</span>
            <span>All settings saved locally in your browser</span>
          </li>
        </ul>
        <p class="mt-3 text-xs text-green-700 italic">
          A tool built by an entrepreneur, for entrepreneurs.
        </p>
      </div>

      <div class="bg-blue-50 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-blue-900 mb-2">About Profit First</h3>
        <p class="text-blue-800 text-sm leading-relaxed">
          The Profit First methodology, developed by Mike Michalowicz, transforms the traditional accounting formula 
          of Sales - Expenses = Profit to Sales - Profit = Expenses. By allocating profit first, you ensure your 
          business remains profitable. The default percentages shown are recommendations for businesses with revenue 
          under $250,000 annually.
        </p>
        <router-link to="/config" class="inline-block mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium">
          Customize your allocations →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAllocationStore } from '../stores/allocation'
import AllocationResult from '../components/AllocationResult.vue'

const store = useAllocationStore()
</script>