'use server'

import { redirect } from 'next/navigation'
import { auth } from '@/auth'

import { stripe } from '@/lib/stripe'
import { getUserSubscriptionPlan } from '@/lib/subscription'
import { absoluteUrl } from '@/lib/utils'

export type responseAction = {
  status: 'success' | 'error'
  stripeUrl?: string
}

// const billingUrl = absoluteUrl("/dashboard/billing")
const billingUrl = absoluteUrl('/pricing')

export async function generateUserStripe(priceId: string): Promise<responseAction> {
  let redirectUrl: string = ''

  try {
    const session = await auth()
    const user = session?.user

    if (!user || !user.email || !user.id) {
      console.error('User authentication failed: Missing user information')
      throw new Error('Unauthorized')
    }
    console.log('User authenticated successfully:', { userId: user.id, email: user.email })

    const subscriptionPlan = await getUserSubscriptionPlan(user.id)

    if (!subscriptionPlan) {
      console.error('Failed to retrieve user subscription plan for user:', user.id)
      throw new Error('Subscription plan not found')
    }

    console.log('Subscription plan fetched:', subscriptionPlan)

    if (subscriptionPlan.isPaid && subscriptionPlan.stripeCustomerId) {
      // User on Paid Plan - Create a portal session to manage subscription.
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: subscriptionPlan.stripeCustomerId,
        return_url: billingUrl
      })

      if (!stripeSession?.url) {
        console.error('Stripe billing portal session creation failed:', stripeSession)
        throw new Error('Stripe billing portal session creation failed')
      }

      console.log('Stripe billing portal session created:', stripeSession)
      redirectUrl = stripeSession.url as string
    } else {
      // User on Free Plan - Create a checkout session to upgrade.
      const stripeSession = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        success_url: billingUrl,
        cancel_url: billingUrl,
        mode: 'subscription',
        billing_address_collection: 'auto',
        customer_email: user.email,
        line_items: [
          {
            price: priceId,
            quantity: 1
          }
        ],
        metadata: {
          userId: user.id
        }
      })

      if (!stripeSession?.url) {
        console.error('Stripe checkout session creation failed:', stripeSession)
        throw new Error('Stripe checkout session creation failed')
      }

      console.log('Stripe checkout session created:', stripeSession)
      redirectUrl = stripeSession.url as string
    }
  } catch (error: any) {
    console.error('Failed to generate user stripe session:', error)

    // Rethrow the error with more context
    throw new Error(`Failed to generate user stripe session: ${error.message || error}`)
  }

  console.log('Redirecting to Stripe URL:', redirectUrl)

  // no revalidatePath because redirect
  redirect(redirectUrl)
}
