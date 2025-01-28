'use client'

import React from 'react'
import { motion } from 'framer-motion'

import { ImagesSlider } from './ui/images-slider'

export function ImageSliders() {
  const images = [
    '/_static/photos/location.png',
    '/_static/photos/2.png',
    '/_static/photos/group2.png',
    '/_static/photos/111111.png',
    '/_static/photos/privatecoach.png',
    '/_static/photos/group1.png',
    '/_static/photos/group4.png',
    '/_static/photos/group5.png',
    '/_static/photos/group6.jpg',
    '/_static/photos/group7.png',
    '/_static/photos/gauntlet2.png',
    '/_static/photos/gauntlet4.png',
    '/_static/photos/gauntlet1.png',
    '/_static/photos/padska.png',
    '/_static/photos/group-pose.jpeg',
    '/_static/photos/nov-nerds.png',
    '/_static/photos/nerds_nov_w3.png'
  ]
  return (
    <ImagesSlider className='' images={images}>
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
        <motion.p className='text-gradient_yellows bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-8 text-center text-xl font-black uppercase text-transparent md:text-5xl'>
          Nerds Fighting
        </motion.p>
        <div className='relative mx-auto mt-4 rounded-full border-2 border-zinc-500/30 bg-black/0 px-4 py-1 text-center text-white backdrop-blur-sm md:py-2'>
          <p className='text-gradient_pinks text-center text-[10px] tracking-wide md:text-[11px]'>
            MUAY THAI · BOXING · KICKBOXING · TRAINING
          </p>
          <div className='absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-zinc-200 via-zinc-100/50 to-zinc-300/50' />
        </div>
      </motion.div>
    </ImagesSlider>
  )
}
