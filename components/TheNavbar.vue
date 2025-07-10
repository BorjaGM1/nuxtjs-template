<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <!-- Logo -->
          <NuxtLink to="/" class="flex-shrink-0 flex items-center">
            <img class="h-8 w-auto" src="/favicon.ico" alt="Logo" />
            <span class="ml-2 text-xl font-bold text-gray-900">YourSite</span>
          </NuxtLink>
          
          <!-- Navigation Links -->
          <div class="hidden md:ml-10 md:flex md:space-x-8">
            <NuxtLink
              to="/"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact
            </NuxtLink>
          </div>
        </div>
        
        <!-- Auth buttons -->
        <div class="flex items-center space-x-4">
          <div v-if="!user" class="hidden md:flex space-x-2">
            <NuxtLink
              to="/login"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Sign In
            </NuxtLink>
            <NuxtLink
              to="/signup"
              class="btn-primary text-sm"
            >
              Sign Up
            </NuxtLink>
          </div>
          
          <div v-else class="hidden md:flex items-center space-x-4">
            <NuxtLink
              to="/dashboard"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Dashboard
            </NuxtLink>
            <button
              @click="signOut"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Sign Out
            </button>
          </div>
          
          <!-- Mobile menu button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!mobileMenuOpen" class="block h-6 w-6" />
            <XMarkIcon v-else class="block h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
        <NuxtLink
          to="/"
          class="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          @click="mobileMenuOpen = false"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          @click="mobileMenuOpen = false"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          @click="mobileMenuOpen = false"
        >
          Contact
        </NuxtLink>
        
        <div v-if="!user" class="border-t border-gray-200 pt-4">
          <NuxtLink
            to="/login"
            class="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            @click="mobileMenuOpen = false"
          >
            Sign In
          </NuxtLink>
          <NuxtLink
            to="/signup"
            class="btn-primary block mx-3 mt-2 text-center"
            @click="mobileMenuOpen = false"
          >
            Sign Up
          </NuxtLink>
        </div>
        
        <div v-else class="border-t border-gray-200 pt-4">
          <NuxtLink
            to="/dashboard"
            class="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            @click="mobileMenuOpen = false"
          >
            Dashboard
          </NuxtLink>
          <button
            @click="signOut"
            class="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const user = useSupabaseUser()
const supabase = useSupabaseClient()
const router = useRouter()

const mobileMenuOpen = ref(false)

const signOut = async () => {
  await supabase.auth.signOut()
  await router.push('/')
  mobileMenuOpen.value = false
}

// Close mobile menu when route changes
watch(() => router.currentRoute.value.path, () => {
  mobileMenuOpen.value = false
})
</script> 