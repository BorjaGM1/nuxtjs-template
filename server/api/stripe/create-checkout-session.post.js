import Stripe from 'stripe'

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()
    const stripe = new Stripe(config.stripeSecretKey)
    
    // Get request body
    const body = await readBody(event)
    const { priceId, userId, successUrl, cancelUrl } = body
    
    // Validate required fields
    if (!priceId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Price ID is required'
      })
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription', // Change to 'payment' for one-time payments
      success_url: successUrl || `${config.public.siteUrl}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${config.public.siteUrl}/dashboard`,
      metadata: {
        userId: userId || 'anonymous'
      },
      customer_email: undefined, // You can set customer email if available
      allow_promotion_codes: true,
    })

    return {
      url: session.url,
      sessionId: session.id
    }
  } catch (error) {
    console.error('Stripe checkout session error:', error)
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to create checkout session'
    })
  }
}) 