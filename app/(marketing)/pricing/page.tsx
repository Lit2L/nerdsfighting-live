import Image from 'next/image'
import Link from 'next/link'

import { getCurrentUser } from '@/lib/session'
import { getUserSubscriptionPlan } from '@/lib/subscription'
import { constructMetadata } from '@/lib/utils'
import { ComparePlans } from '@/components/pricing/compare-plans'
import { PricingCards } from '@/components/pricing/pricing-cards'

export const metadata = constructMetadata({
  title: 'Pricing – NERDS Fighting',
  description: 'Explore our subscription plans.'
})

export default async function PricingPage() {
  const user = await getCurrentUser()

  if (user?.role === 'ADMIN') {
    return (
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold'>Seriously?</h1>
        <Image
          src='/_static/illustrations/call-waiting.svg'
          alt='403'
          width={560}
          height={560}
          className='pointer-events-none -my-20 dark:invert'
        />
        <p className='text-balance px-4 text-center text-2xl font-medium'>
          You are an {user.role}. Back to{' '}
          <Link
            href='/admin'
            className='text-muted-foreground underline underline-offset-4 hover:text-purple-500'
          >
            Dashboard
          </Link>
          .
        </p>
      </div>
    )
  }

  let subscriptionPlan
  if (user && user.id) {
    subscriptionPlan = await getUserSubscriptionPlan(user.id)
  }

  return (
    <div className='relative flex min-h-screen w-full flex-col justify-center'>
      {/* <Image
        src='/_static/bg10.png'
        alt='bg'
        layout='fill'
        className='absolute -z-10 object-contain opacity-10 blur-sm'
      /> */}
      <div className='bgPricing blur-md'></div>
      <PricingCards userId={user?.id} subscriptionPlan={subscriptionPlan} />
      <hr className='container' />
      {/* <ComparePlans /> */}
      {/* <PricingFaq /> */}
    </div>
  )
}
