import { loadStripe } from '@stripe/stripe-js'

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig()
  
  // Initialize Stripe
  const stripe = await loadStripe(config.public.stripePublishableKey)
  
  return {
    provide: {
      stripe
    }
  }
}) 