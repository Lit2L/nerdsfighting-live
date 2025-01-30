import React from 'react'

import { FlipWords } from '@/components/ui/flip-words'

export function FlipWordsComponent() {
  const words = [
    'Burn Calories Fast +1000/Workout',
    'Relieve Stress',
    'Develop Striking Skills',
    'Develop Defense',
    'Functional Strength',
    'Mental Sharpness & Focus',
    'Group Workouts',
    'Team Environment'
  ]

  return (
    <div className='flex w-full flex-col items-center justify-center'>
      <div className='mx-auto flex w-full items-center justify-center'>
        <p className='text-md text-center font-genos font-bold text-green-400 dark:text-green-400'>
          +++
        </p>
        <FlipWords words={words} />
      </div>
    </div>
  )
}
