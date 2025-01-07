import React from 'react'

import { FlipWords } from '@/components/ui/flip-words'

export function FlipWordsComponent() {
  const words = [
    'Longevity & Health',
    'Fun & Challenging Workouts',
    'Self-Defense & Confidence',
    'Strength & Conditioning',
    'Balance & Coordination',
    'Weight Loss & Muscle Tone',
    'Technique & Skill Development',
    'Challenge & Growth',
    'Relaxed Chill Environment'
  ]

  return (
    <div className='flex w-full flex-col items-center justify-center gap-6 px-4'>
      <div className='mx-auto flex w-full items-center justify-center'>
        <p className='text-center font-orbitron text-sm font-bold text-emerald-400 dark:text-emerald-500'>
          +++
        </p>
        <FlipWords words={words} />
      </div>
    </div>
  )
}
