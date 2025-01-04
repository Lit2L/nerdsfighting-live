import React from 'react'

import { FlipWords } from '@/components/ui/flip-words'

export function FlipWordsComponent() {
  const words = [
    'Longevity & Health',
    'Not Your Average Tough Guy Gym',
    'Self-Defense & Confidence',
    'Strength & Conditioning',
    'Flexibility & Mobility',
    'Mental Toughness & Resilience',
    'Discipline & Focus',
    'Balance & Coordination',
    'Speed & Agility',
    'Power & Explosiveness',
    'Endurance & Stamina',
    'Weight Loss & Muscle Tone',
    'Fight IQ & Strategy',
    'Technique & Timing',
    'Mindfulness & Calmness',
    'Breathing & Relaxation',
    'Team Work & Friendship',
    'Fun & Enjoyment',
    'Challenge & Growth',
    'Achievement & Success',
    'Practice Safely for Longevity',
    'Be Strong Be Peaceful',
    'Challenge Yourself to Grow',
    'Practice Safely for Longevity',
    'Easy Relaxed Environment',
    'Start With One Step'
  ]

  return (
    <div className='flex w-full flex-col items-center justify-center gap-6 px-4'>
      <div className='mx-auto flex w-full items-center justify-center'>
        <p className='font-orbitron text-center text-sm font-bold text-emerald-400 dark:text-emerald-500'>
          +++
        </p>
        <FlipWords words={words} />
      </div>
    </div>
  )
}
