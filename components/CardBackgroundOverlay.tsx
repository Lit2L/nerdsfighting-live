'use client'

import { useRef } from 'react'

import { cn } from '@/lib/utils'

export function CardDemo() {
  const cards = [
    {
      title: 'Gain an Edge',
      description: [
        'Less than 1% train in Martial Arts.',
        'Feel confident anywhere.'
        // 'True confidence comes from knowing you can handle yourself wherever you are.'
      ],
      image: '/_static/photos/2.png'
    },
    {
      title: 'Find Your Balance',
      description: [
        'Outlet to release stress, tension and anxiety levels.',
        'Experience the after workout buzz.'
      ],
      image: '/_static/photos/111111.png'
    },
    {
      title: 'Find Your Flow State',
      description: [
        'Sharpen your focus, precision, reaction times while flowing.',

        'Flow from one move into the next one gracefully.'
      ],
      image: '/_static/photos/privatecoach.png'
    },

    {
      title: 'Safe Zone',
      description: ['Egos are checked. No Bullying or Drama Tolerated.'],
      image: '/_static/photos/gauntlet1.png'
    },
    {
      title: 'Interactive Group Workouts',
      description: [
        'Work with training partners to develop skills.',
        'Hold Thai pads, boxing mitts, and drill with others.'
      ],
      image: '/_static/photos/nerds1.png'
    },

    {
      title: 'Play Based Learning',
      description: [
        // 'Learn to control your emotions during intense situations.',
        // 'Dance in the magic of Muay Thai until it becomes a part of you.',
        // 'Explore, practice, and implement safely.',
        'Play is the highest form of research.',
        'Learn to control your strikes to maximize learning and sparring ability.'
      ],
      image: '/_static/photos/game.png'
    }
  ]

  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0 // Reset to beginning
    }
  }

  return (
    <div className='w-full max-w-xs'>
      <div
        className={cn(
          'card group relative mx-auto flex h-96 w-full cursor-pointer flex-col justify-end overflow-hidden rounded-md border border-transparent p-4 shadow-xl dark:border-neutral-800',
          'transition-all duration-500'
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background Image (Default) */}
        <img
          src='/_static/photos/privatecoach.png'
          alt='Background'
          className='absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0'
        />

        {/* Video (Hidden initially, plays on hover) */}
        <video
          ref={videoRef}
          className='absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100'
          src='/Mark_Coach.mp4'
          muted
          loop
          playsInline
        />

        <div className='text relative z-50'>
          <h1 className='relative text-xl font-bold text-gray-50 md:text-3xl'>
            Background Overlays
          </h1>
          <p className='relative my-4 text-base font-normal text-gray-50'>
            displaying background videos on hover.
          </p>
        </div>
      </div>
    </div>
  )
}
