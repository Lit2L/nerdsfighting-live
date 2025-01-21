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
    // '/_static/photos/gauntlet-group.png',
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
        <motion.p className='bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-8 text-center text-xl text-transparent md:text-4xl'>
          Welcome to <span className='text-gradient_blues md:text-5xl'>Nerds Fighting </span>Gym
        </motion.p>
        <button className='relative mx-auto mt-4 rounded-full border-2 border-zinc-500/30 bg-black/70 px-4 py-1 text-center text-white backdrop-blur-sm md:py-2'>
          <p className='text-gradient_pinks text-center text-[10px] tracking-wide md:text-[11px]'>
            MUAY THAI · BOXING · KICKBOXING · TRAINING
          </p>
          <div className='absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-zinc-400 to-transparent' />
        </button>
      </motion.div>
    </ImagesSlider>
  )
}
