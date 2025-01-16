import React from 'react'

import { FlipWords } from '@/components/ui/flip-words'

export function FlipWordsComponent() {
  const words = [
    'Burn Calories Fast +1000/Workout',
    'Relieve Stress',
    'Unshakable Confidence',
    'Functional Strength',
    'Mental Sharpness & Focus',
    'Increased Energy',
    'Full Body Fitness',
    'Smart Effective Training',
    'Brain-First Approach',
    'Become A Protector',
    'Group Workouts',
    'Supportive Community'
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
