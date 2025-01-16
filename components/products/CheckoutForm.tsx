'use client'

import { FormEvent, useEffect, useState } from 'react'
import priceFormat from '@/utils/priceFormat'
import { useCartStore } from '@/zustand/store'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'

interface Props {
  clientSecret: string
}

export default function CheckoutForm({ clientSecret }: Props) {
  const [isLoading, setIsLoading] = useState(false)
  const stripe = useStripe()
  const elements = useElements()
  const cartStore = useCartStore()

  const totalPrice = cartStore.cart.reduce(
    (acc, item) => acc + item.unit_amount! * item.quantity!,
    0
  )

  useEffect(() => {
    if (!stripe) return
    if (!clientSecret) return
  }, [stripe])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!stripe || !elements) return
    setIsLoading(true)
    stripe
      .confirmPayment({
        elements,
        redirect: 'if_required'
      })
      .then((result) => {
        if (!result.error) {
          cartStore.setCheckout('success')
        }
        setIsLoading(false)
      })
  }

  return (
    <form onSubmit={handleSubmit} id='payment-form'>
      <PaymentElement id='payment-element' options={{ layout: 'tabs' }} />
      <h1 className='mt-4 py-4 text-sm font-semibold'>Total: {priceFormat(totalPrice)}</h1>
      <button
        id='submit'
        disabled={isLoading || !stripe || !elements}
        className='btn btn-primary my-4 w-full'
      >
        {isLoading ? <span>Processing</span> : <span>Pay now</span>}
      </button>
    </form>
  )
}
