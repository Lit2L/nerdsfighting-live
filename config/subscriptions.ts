import { PlansRow, SubscriptionPlan } from 'types'
import { env } from '@/env.mjs'

export const pricingData: SubscriptionPlan[] = [
  // {
  //   title: 'Starter',
  //   name: 'Drop-In',
  //   description: 'For Beginners',
  //   benefits: [
  //     'Drop in for a single class',
  //     'Cardio, strength, and flexibility',
  //     'Claim your spot in class anytime'
  //   ],
  //   limitations: ['Access to one class only', 'No access to online resources'],
  //   prices: {
  //     monthly: 0,
  //     yearly: 0
  //   },
  //   stripeIds: {
  //     monthly: null,
  //     yearly: null
  //   }
  // },
  {
    title: 'Pro',
    name: 'NERDS Membership',
    description: 'Become a NERD',
    benefits: [
      'No long term commitments, pause or cancel anytime with a one month notice',
      'Access to all Cardio Kickboxing & Muay Thai Classes',
      'Online access to account management',
      'Healthy rewarding lifestyle',
      'Get and stay flexible, strong, and sharp'
    ],
    limitations: ['Access only to Muay Thai & Kickboxing Classes'],
    prices: {
      monthly: 125,
      yearly: 1200
    },
    stripeIds: {
      monthly: env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID,
      yearly: env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID
    }
  }
  // {
  //   title: 'Business',
  //   name: 'NERD SUPERBOOST Plan',
  //   description: 'For the Motivated NERDS',
  //   benefits: [
  //     'Included 4 Private Lessons per Month',
  //     'Unlimited Access to Muay Thai Kickboxing Classes',
  //     'Online access to account management',
  //     'Detailed Martial Arts Instructions',
  //     'Strength and Conditioning',
  //     'Sparring and Technique',
  //     'Exclusive video analysis on technique and strategy.'
  //   ],
  //   limitations: [],
  //   prices: {
  //     monthly: 250,
  //     yearly: 2400
  //   },
  //   stripeIds: {
  //     monthly: env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID,
  //     yearly: env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PLAN_ID
  //   }
  // }
]

export const plansColumns = ['starter', 'pro', 'business', 'enterprise'] as const

export const comparePlans: PlansRow[] = [
  {
    feature: 'Access to Analytics',
    starter: true,
    pro: true,
    business: true,
    enterprise: 'Custom',
    tooltip: 'All plans include basic analytics for tracking performance.'
  },
  {
    feature: 'Custom Branding',
    starter: null,
    pro: '500/mo',
    business: '1,500/mo',
    enterprise: 'Unlimited',
    tooltip: 'Custom branding is available from the Pro plan onwards.'
  },
  {
    feature: 'Priority Support',
    starter: null,
    pro: 'Email',
    business: 'Email & Chat',
    enterprise: '24/7 Support'
  },
  {
    feature: 'Advanced Reporting',
    starter: null,
    pro: null,
    business: true,
    enterprise: 'Custom',
    tooltip: 'Advanced reporting is available in Business and Enterprise plans.'
  },
  {
    feature: 'Dedicated Manager',
    starter: null,
    pro: null,
    business: null,
    enterprise: true,
    tooltip: 'Enterprise plan includes a dedicated account manager.'
  },
  {
    feature: 'API Access',
    starter: 'Limited',
    pro: 'Standard',
    business: 'Enhanced',
    enterprise: 'Full'
  },
  {
    feature: 'Monthly Webinars',
    starter: false,
    pro: true,
    business: true,
    enterprise: 'Custom',
    tooltip: 'Pro and higher plans include access to monthly webinars.'
  },
  {
    feature: 'Custom Integrations',
    starter: false,
    pro: false,
    business: 'Available',
    enterprise: 'Available',
    tooltip: 'Custom integrations are available in Business and Enterprise plans.'
  },
  {
    feature: 'Roles and Permissions',
    starter: null,
    pro: 'Basic',
    business: 'Advanced',
    enterprise: 'Advanced',
    tooltip: 'User roles and permissions management improves with higher plans.'
  },
  {
    feature: 'Onboarding Assistance',
    starter: false,
    pro: 'Self-service',
    business: 'Assisted',
    enterprise: 'Full Service',
    tooltip: 'Higher plans include more comprehensive onboarding assistance.'
  }
  // Add more rows as needed
]
