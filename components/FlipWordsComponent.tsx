import React from 'react'

import { FlipWords } from '@/components/ui/flip-words'

export function FlipWordsComponent() {
  const words = [
    'Burn Calories Fast - 1000/hr',
    'Relieve Stress & Anxiety',
    'Develop Unshakable Confidence',
    'Functional Strength Workouts',
    'Get Fit, Get Strong & Live Long',
    'Become A Protector',
    'Engage In Fun Group Workouts'
  ]

  return (
    <div className='flex w-full flex-col items-center justify-center'>
      <div className='mx-auto flex w-full items-center justify-center'>
        <p className='text-md text-center font-genos font-bold text-emerald-400 dark:text-emerald-500'>
          +++
        </p>
        <FlipWords words={words} />
      </div>
    </div>
  )
}
