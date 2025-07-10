<template>
  <div>
    <div class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="py-6 md:flex md:items-center md:justify-between">
          <div class="flex-1 min-w-0">
            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Welcome back, {{ user?.user_metadata?.full_name || 'User' }}!
            </h2>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
              Here's what's happening with your account today.
            </p>
          </div>
          <div class="mt-6 flex space-x-3 md:mt-0 md:ml-4">
            <button
              @click="initializeStripe"
              type="button"
              class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Upgrade Plan
            </button>
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              New Project
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">Total Projects</dt>
                    <dd class="text-lg font-medium text-gray-900">{{ stats.projects }}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                    </svg>
                  </div>
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">Current Plan</dt>
                    <dd class="text-lg font-medium text-gray-900">{{ stats.plan }}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">Usage This Month</dt>
                    <dd class="text-lg font-medium text-gray-900">{{ stats.usage }}%</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="bg-white shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
            <div class="mt-5">
              <div class="flow-root">
                <ul class="-my-5 divide-y divide-gray-200">
                  <li v-for="activity in activities" :key="activity.id" class="py-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                          </svg>
                        </div>
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate">
                          {{ activity.title }}
                        </p>
                        <p class="text-sm text-gray-500 truncate">
                          {{ activity.description }}
                        </p>
                      </div>
                      <div class="flex-shrink-0 text-sm text-gray-500">
                        {{ activity.time }}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Protect this page - require authentication
definePageMeta({
  middleware: 'auth'
})

useHead({
  title: 'Dashboard - YourSite',
  meta: [
    {
      name: 'description',
      content: 'Your personal dashboard to manage your account and projects.'
    }
  ]
})

const user = useSupabaseUser()
const { $stripe } = useNuxtApp()

// Sample data - replace with real data from your backend
const stats = ref({
  projects: 12,
  plan: 'Free',
  usage: 85
})

const activities = ref([
  {
    id: 1,
    title: 'Account created',
    description: 'Welcome to the platform!',
    time: '2 hours ago'
  },
  {
    id: 2,
    title: 'Profile updated',
    description: 'Personal information was updated',
    time: '1 day ago'
  },
  {
    id: 3,
    title: 'First project created',
    description: 'Started working on your first project',
    time: '3 days ago'
  }
])

// Stripe integration example
const initializeStripe = async () => {
  try {
    // This is a placeholder for Stripe integration
    // You would typically create a checkout session on your backend
    console.log('Initializing Stripe checkout...')
    
    // Example: Redirect to Stripe checkout
    // const response = await $fetch('/api/stripe/create-checkout-session', {
    //   method: 'POST',
    //   body: {
    //     priceId: 'price_1234567890', // Your Stripe price ID
    //     userId: user.value.id
    //   }
    // })
    
    // if (response.url) {
    //   window.location.href = response.url
    // }
    
    alert('Stripe integration placeholder - implement in backend')
  } catch (error) {
    console.error('Stripe initialization error:', error)
  }
}
</script> 