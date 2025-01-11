import Image from 'next/image'
import Link from 'next/link'
import getProducts from '@/utils/getProducts'
import Stripe from 'stripe'

import { env } from '@/env.mjs'
import { getCurrentUser } from '@/lib/session'
import { getUserSubscriptionPlan } from '@/lib/subscription'
import { constructMetadata } from '@/lib/utils'
import { ComparePlans } from '@/components/pricing/compare-plans'
import { PricingCards } from '@/components/pricing/pricing-cards'
import Product from '@/components/products/Product'

export default async function DealPage() {
  return (
    <div className='relative flex min-h-screen w-full flex-col justify-center'>
      <div className='bgPricing blur-md' />
      <hr className='container' />
      {/* <ComparePlans /> */}
      {/* <PricingFaq /> */}
    </div>
  )
}
