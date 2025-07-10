import Stripe from 'stripe'

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()
    const stripe = new Stripe(config.stripeSecretKey)
    
    // Get the raw body for signature verification
    const body = await readRawBody(event)
    const signature = getHeader(event, 'stripe-signature')
    
    if (!signature) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing Stripe signature'
      })
    }

    // Verify webhook signature
    let stripeEvent
    try {
      stripeEvent = stripe.webhooks.constructEvent(
        body, 
        signature, 
        config.stripeWebhookSecret
      )
    } catch (err) {
      console.error('Webhook signature verification failed:', err.message)
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid signature'
      })
    }

    // Handle the event
    console.log('Received Stripe webhook:', stripeEvent.type)
    
    switch (stripeEvent.type) {
      case 'checkout.session.completed':
        await handleCheckoutSessionCompleted(stripeEvent.data.object)
        break
        
      case 'customer.subscription.created':
        await handleSubscriptionCreated(stripeEvent.data.object)
        break
        
      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(stripeEvent.data.object)
        break
        
      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(stripeEvent.data.object)
        break
        
      case 'invoice.payment_succeeded':
        await handlePaymentSucceeded(stripeEvent.data.object)
        break
        
      case 'invoice.payment_failed':
        await handlePaymentFailed(stripeEvent.data.object)
        break
        
      default:
        console.log(`Unhandled event type: ${stripeEvent.type}`)
    }

    return { received: true }
  } catch (error) {
    console.error('Webhook processing error:', error)
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Webhook processing failed'
    })
  }
})

// Event handlers
async function handleCheckoutSessionCompleted(session) {
  console.log('Checkout session completed:', session.id)
  
  // TODO: Update user subscription status in your database
  // Example:
  // const userId = session.metadata.userId
  // await updateUserSubscription(userId, {
  //   stripeCustomerId: session.customer,
  //   subscriptionId: session.subscription,
  //   status: 'active'
  // })
}

async function handleSubscriptionCreated(subscription) {
  console.log('Subscription created:', subscription.id)
  
  // TODO: Handle new subscription creation
  // Update user's subscription status in database
}

async function handleSubscriptionUpdated(subscription) {
  console.log('Subscription updated:', subscription.id)
  
  // TODO: Handle subscription updates
  // Update subscription details in database
}

async function handleSubscriptionDeleted(subscription) {
  console.log('Subscription deleted:', subscription.id)
  
  // TODO: Handle subscription cancellation
  // Update user's subscription status to cancelled
}

async function handlePaymentSucceeded(invoice) {
  console.log('Payment succeeded:', invoice.id)
  
  // TODO: Handle successful payment
  // Update payment records, send confirmation emails, etc.
}

async function handlePaymentFailed(invoice) {
  console.log('Payment failed:', invoice.id)
  
  // TODO: Handle failed payment
  // Send notification to user, update subscription status, etc.
} 