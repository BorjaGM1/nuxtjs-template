// https://nuxt.com/docs/api/configuration/nuxt-config
import { config as loadEnv } from 'dotenv'
loadEnv()
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  
  modules: [
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],

  css: ['~/assets/css/main.css'],

  // SSR configuration
  ssr: true,
  
  routeRules: {
    // Landing page and public pages should be SSR
    '/': { ssr: true },
    '/privacy': { ssr: true },
    '/terms': { ssr: true },
    '/about': { ssr: true },
    '/contact': { ssr: true },
    // Auth pages can be SPA
    '/login': { ssr: false },
    '/signup': { ssr: false },
    '/dashboard/**': { ssr: false },
  },

  runtimeConfig: {
    // Private keys (only available on server-side)
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    
    // Public keys (exposed to client-side)
    public: {
      stripePublishableKey: process.env.NUXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
    }
  },

  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirectOptions: {
      login: '/login',
      callback: '/dashboard',
      exclude: ['/']
    }
  }
});
