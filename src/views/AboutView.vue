<template>
  <div class="space-y-8">
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 class="text-3xl font-bold text-gray-900 mb-6">About PFCalc</h2>
      
      <div class="prose prose-gray max-w-none space-y-4 text-gray-700">
        <p class="text-lg leading-relaxed">
          This app was created by Kevin Griffin as a way to quickly figure out his allocations 
          after years of doing Profit First for his consulting business.
        </p>
        
        <p>
          PFCalc is a simple, no-frills calculator designed to help business owners implement 
          the Profit First methodology. Enter your income, and instantly see how much to allocate 
          to profit, taxes, owner's pay, and operating expenses.
        </p>

        <p>
          The app works offline, saves your custom allocation percentages, and requires no sign-up 
          or personal information. It's a tool built by an entrepreneur, for entrepreneurs.
        </p>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 class="text-2xl font-bold text-gray-900 mb-4">About Kevin Griffin</h3>
      
      <div class="space-y-4">
        <div class="float-right ml-6 mb-4">
          <img 
            src="https://consultwithgriff.com/assets/static/kevin_rockon.b269a45.02e93266d7a8a43cc21b736d8d48ca55.jpg" 
            alt="Kevin Griffin"
            class="w-32 h-32 rounded-full shadow-md object-cover"
          >
        </div>
        <p class="text-gray-700 leading-relaxed">
          Kevin Griffin is a consultant and entrepreneur who has been successfully implementing 
          the Profit First methodology in his consulting business for years. After repeatedly 
          calculating allocations manually, he built PFCalc to streamline the process.
        </p>

        <div class="pt-4">
          <h4 class="text-lg font-semibold text-gray-900 mb-3">Connect with Kevin</h4>
          <div class="space-y-3">
            <a 
              href="https://consultwithgriff.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center text-profit-green hover:text-green-700 transition-colors"
            >
              <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              </svg>
              <span class="font-medium">consultwithgriff.com</span>
            </a>

            <a 
              href="https://x.com/1kevgriff" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center text-profit-green hover:text-green-700 transition-colors"
            >
              <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span class="font-medium">@1kevgriff on X</span>
            </a>

            <a 
              href="https://bsky.app/profile/consultwithgriff.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center text-profit-green hover:text-green-700 transition-colors"
            >
              <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-11.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm7 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-3.5 7c-2.206 0-4-1.794-4-4h1c0 1.654 1.346 3 3 3s3-1.346 3-3h1c0 2.206-1.794 4-4 4z"/>
              </svg>
              <span class="font-medium">@consultwithgriff.com on Bluesky</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/1kevgriff" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center text-profit-green hover:text-green-700 transition-colors"
            >
              <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span class="font-medium">LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-profit-green bg-opacity-10 rounded-lg p-6">
      <h3 class="text-xl font-bold text-gray-900 mb-3">About Profit First</h3>
      <p class="text-gray-700 leading-relaxed mb-4">
        Profit First is a cash management system developed by Mike Michalowicz that helps 
        businesses achieve profitability by flipping the traditional accounting formula. Instead 
        of Sales - Expenses = Profit, Profit First uses Sales - Profit = Expenses, ensuring 
        profit is prioritized from day one.
      </p>
      <p class="text-sm text-gray-600">
        Learn more about the methodology in Mike Michalowicz's book 
        <span class="font-semibold">"Profit First: Transform Your Business from a Cash-Eating Monster to a Money-Making Machine"</span>
      </p>
    </div>
  </div>
</template>

<script setup>
</script>