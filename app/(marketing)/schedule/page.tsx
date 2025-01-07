import Image from 'next/image'
import Link from 'next/link'

import { getCurrentUser } from '@/lib/session'
import { getUserSubscriptionPlan } from '@/lib/subscription'
import { constructMetadata } from '@/lib/utils'
import { ComparePlans } from '@/components/pricing/compare-plans'
import { PricingCards } from '@/components/pricing/pricing-cards'
import { PricingFaq } from '@/components/pricing/pricing-faq'
import { Schedule } from '@/components/sections/schedule'

export const metadata = constructMetadata({
  title: 'Schedule – Nerds Fighting',
  description: 'Explore class schedule.'
})

export default async function SchedulePage() {
  return (
    <div className='relative flex flex-col gap-16 py-8 md:py-8'>
      {/* <Image
        src='/bg10.png'
        alt='bg'
        layout='fill'
        className='absolute -z-10 object-contain opacity-10 blur-sm'
      /> */}
      <div className='bgPricing blur-md'></div>
      <Schedule />
      <hr className='container' />
      {/* <PricingFaq /> */}
    </div>
  )
}
