'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCartStore } from '@/zustand/store'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js'
import { motion } from 'framer-motion'

import { useTheme } from '@/hooks/use-theme'

import CheckoutForm from './CheckoutForm'
import OrderAnimation from './OrderAnimation'

// const promiseOops = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY!); // ❌
const promise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!) // ✅

export default function Checkout() {
  // ZUSTAND: CONSUMING THE STORE ⭐️
  const cartStore = useCartStore()

  const [clientSecret, setClientSecret] = useState('')
  const [stripeTheme, setStripeTheme] = useState<'flat' | 'stripe' | 'night' | 'none'>('stripe')

  const router = useRouter()
  const { theme = 'system' } = useTheme()

  useEffect(() => {
    // THEME: SET MODE HERE
    if (theme === 'dark') setStripeTheme('night')
    if (theme === 'light') setStripeTheme('stripe')
    if (theme === 'system') setStripeTheme('flat')

    // STRIPE: DEFINE AN API ROUTE ⭐️
    // Here we passing our payment data to this API route.
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // 👇🏻 We send cart items to a route to create or update a payment intent.
      // We `stringify` cart items because a body of fetch requests must be only
      // be a string or `Blob` object. Zustand we `persist` all  store state to
      // localStorage, so that store state is preserved across page loads.
      body: JSON.stringify({
        items: cartStore.cart,
        // This will be used to update a existing PaymentIntent if provided one.
        // If not provided, a new intent will be created with these items.
        payment_intent_id: cartStore.paymentIntent
      })
    })
      .then((res) => {
        // STRIPE: UNAUTHENTICATED USER WILL NAVIGATE TO SIGNIN PAGE ⭐️
        // By using useRouter we can access the query object. If the user is not
        // authenticated, navigate them to the api signin page.
        if (res.status === 403) {
          return router.push('/api/auth/signin')
        }
        // STRIPE: ASSOCIATE CLIENT SECRET WITH PAYMENT INTENT ⭐️
        // Here we condition if the user's not authenticated to return them to our
        // home route/page. Otherwise if logged in, we want to set the new payment
        // intent to a response we get from a Stripe API route. Here we associate
        // the client secret with the payment intent.
        return res.json()
      })
      .then((data) => {
        // STRIPE: ASSOCIATE CLIENT SECRET WITH PAYMENT INTENT ⭐️
        // If logged in, we want to set the new payment intent to a response we
        // get from a our custom payment API route. With a client secret we have
        // the ability to continue with the payment process.
        setClientSecret(data.paymentIntent.client_secret)
        cartStore.setPaymentIntent(data.paymentIntent.id)
      })
  }, [])

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: 'night',
      labels: 'floating'
    }
  }

  return (
    <div>
      {clientSecret && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{
            delay: 1,
            type: 'spring',
            duration: 0.5
          }}
        >
          <Elements options={options} stripe={promise}>
            <CheckoutForm clientSecret={clientSecret} />
          </Elements>
        </motion.div>
      )}
      {!clientSecret && <OrderAnimation />}
    </div>
  )
}
