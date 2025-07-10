<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Welcome to the Future
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100">
            Build amazing experiences with our modern platform
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <NuxtLink
              to="/signup"
              class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Free
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p class="text-xl text-gray-600">
            Everything you need to succeed in the modern digital world
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-6">
            <div class="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p class="text-gray-600">
              Built with modern technologies for optimal performance and speed.
            </p>
          </div>
          
          <div class="text-center p-6">
            <div class="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Secure & Reliable</h3>
            <p class="text-gray-600">
              Enterprise-grade security with 99.9% uptime guarantee.
            </p>
          </div>
          
          <div class="text-center p-6">
            <div class="bg-purple-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Easy to Use</h3>
            <p class="text-gray-600">
              Intuitive interface designed for users of all skill levels.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to Get Started?
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Join thousands of satisfied customers who trust our platform
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink
            to="/signup"
            class="btn-primary text-lg px-8 py-3"
          >
            Start Your Free Trial
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="btn-outline text-lg px-8 py-3"
          >
            Contact Sales
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl font-bold text-blue-600 mb-2">10K+</div>
            <div class="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-green-600 mb-2">99.9%</div>
            <div class="text-gray-600">Uptime</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-purple-600 mb-2">24/7</div>
            <div class="text-gray-600">Support</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-orange-600 mb-2">50+</div>
            <div class="text-gray-600">Countries</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Landing page with SSR
useHead({
  title: 'Welcome to YourSite - Build Amazing Experiences',
  meta: [
    {
      name: 'description',
      content: 'Build amazing experiences with our modern platform. Lightning fast, secure, and easy to use.'
    },
    {
      property: 'og:title',
      content: 'Welcome to YourSite - Build Amazing Experiences'
    },
    {
      property: 'og:description',
      content: 'Build amazing experiences with our modern platform. Lightning fast, secure, and easy to use.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script> 