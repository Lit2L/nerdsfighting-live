'use client'

import React from 'react'
import { motion } from 'framer-motion'

import { ImagesSlider } from './ui/images-slider'

export function ImageSliders() {
  const images = [
    '/_static/photos/111111.png',
    '/_static/photos/2.png',
    '/_static/photos/privatecoach.png',
    '/_static/photos/nerds-team.jpeg',
    // '/_static/photos/analysis.png',
    '/_static/photos/gauntlet1.png',
    '/_static/photos/padska.png',
    '/_static/photos/group-pose.jpeg'
  ]
  return (
    <ImagesSlider className='h-72 md:h-[30rem]' images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.6
        }}
        className='z-50 flex flex-col items-center justify-center'
      >
        <motion.p className='bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-center text-xl font-bold text-transparent md:text-5xl'>
          We&apos;re Nerds, and we Fight Smarter
        </motion.p>
        <button className='relative mx-auto mt-4 rounded-full border border-emerald-500/20 bg-emerald-300/10 px-4 py-2 text-center text-white backdrop-blur-sm'>
          <span>Join now →</span>
          <div className='absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent' />
        </button>
      </motion.div>
    </ImagesSlider>
  )
}
