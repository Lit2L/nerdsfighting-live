import React from 'react'

import { FlipWords } from '@/components/ui/flip-words'

export function FlipWordsComponent() {
  const words = [
    'Get Fit, Get Strong, Be Healthy',
    'Learn & Practice Safely',
    'Chill & Safe Environment',
    'No Meatheads, No Bullies',
    'Develop Mental Toughness & Resilience',
    'Understand the Science of Fighting',
    'Be Confident in Yourself',
    'Make a Meaningful Change Today'
  ]

  return (
    <div className='flex w-full flex-col items-center justify-center gap-6 px-4'>
      <div className='mx-auto flex w-full items-center justify-center'>
        <p className='text-center font-heading text-xl font-bold text-emerald-400 dark:text-emerald-500'>
          +++
        </p>
        <FlipWords words={words} />
      </div>
    </div>
  )
}
