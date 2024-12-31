import React from 'react'

import { FlipWords } from '@/components/ui/flip-words'

export function FlipWordsComponent() {
  const words = [
    'Chill & Safe Environment',
    'No Meatheads, No Bullies',
    'Learn Proper Technique & Form',
    'Improve Cardio & Conditioning',
    'Develop Toughness & Resilience',
    'Increase Strategy & Fight-IQ',
    'Become Confident in Yourself'
  ]

  return (
    <div className='flex w-full flex-col items-center justify-center gap-6 px-4'>
      <div className='mx-auto flex w-96 items-center justify-center'>
        <p className='text-center font-heading text-xl font-bold text-emerald-400 dark:text-emerald-500'>
          +++
        </p>
        <FlipWords words={words} />
      </div>
    </div>
  )
}
