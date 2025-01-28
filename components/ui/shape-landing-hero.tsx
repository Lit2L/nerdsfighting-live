'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { Circle } from 'lucide-react'

import { cn } from '@/lib/utils'

import { AnimatedJoinButton } from '../AnimatedJoinButton'
import {
  LargeCircularRevealHeadingDemo,
  MediumCircularRevealHeadingDemo,
  SmallCircularRevealHeadingDemo
} from '../AnimatedLogo'
import GradualSpacing from '../gradual-spacing'
import Logo from '../Logo'
import { InfiniteSliderHoverSpeed, InfiniteSliderVertical } from '../Slider'

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = 'from-white/[0.08]',
  text = 'df'
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
  text?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 55
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 }
      }}
      className={cn('absolute', className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0]
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut'
        }}
        style={{
          width,
          height
        }}
        className='relative'
      >
        <div
          className={cn(
            'absolute inset-0 rounded-xl',
            'bg-gradient-to-r to-transparent',
            gradient,
            'border-2 border-white/[0.15] backdrop-blur-[2px]',
            'shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]',
            'after:absolute after:inset-0 after:rounded-full',
            'after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]'
          )}
        />
        <span className='absolute inset-0 flex items-center justify-center text-lg font-bold text-white'>
          {text}
        </span>
      </motion.div>
    </motion.div>
  )
}

function HeroGeometric({
  badge = 'Kickboxing Fitness Gym',
  title1 = 'NERDS FIGHTING',
  title2 = 'Training Champions for Life'
}: {
  badge?: string
  title1?: string
  title2?: string
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 3,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1]
      }
    })
  }

  return (
    <div className='relative flex min-h-screen w-full items-center justify-center overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/[0.2] via-transparent to-rose-500/[0.05] blur-3xl' />
      <div className='bgImage' />
      <div className='absolute inset-0 overflow-hidden'>
        {/* <ElegantShape
          delay={0.3}
          width={100}
          height={100}
          rotate={12}
          gradient='from-emerald-500/[0.1]'
          className='left-[-20%] top-[15%] md:left-[5%] md:top-[10%]'
          text='NF'
        />
        <Image
          src='/_static/photos/analysis.png'
          alt='NF'
          width={100}
          height={100}
          className='left-[-20%] top-[15%] md:left-[5%] md:top-[-30%]'
        /> */}
        {/* <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient='from-emerald-500/[0.1]'
          className='right-[-5%] top-[70%] md:right-[0%] md:top-[75%]'
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient='from-green-500/[0.1]'
          className='bottom-[5%] left-[5%] md:bottom-[10%] md:left-[10%]'
        /> */}
        {/* <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient='from-teal-500/[0.1]'
          className='right-[15%] top-[10%] md:right-[20%] md:top-[15%]'
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient='from-cyan-500/[0.15]'
          className='left-[20%] top-[5%] md:left-[15%] md:top-[10%]'
        /> */}
      </div>

      <div className='container relative z-10 mx-auto px-4 md:px-6'>
        <div className='mx-auto max-w-4xl text-center'>
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial='hidden'
            animate='visible'
            className='mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.1] px-3 py-1 shadow-lg shadow-emerald-700/50 md:mb-12'
          >
            <Circle className='size-3 animate-pulse fill-pink-500/80' />
            <span className='text-sm font-semibold tracking-wide text-white/60'>{badge}</span>
          </motion.div>
          <GradualSpacing
            className='text-gradient_yellows font-orbitron font-black uppercase drop-shadow-2xl'
            text='Nerds Fighting'
          />
          <motion.div custom={1} variants={fadeUpVariants} initial='hidden' animate='visible'>
            <h1 className='mb-16 mt-3 text-4xl font-bold tracking-tight md:text-5xl'>
              {/* <span className=''>{title1}</span>
              <br /> */}

              <span
                className={cn(
                  'text-gradient_yellows to-emerald-800 bg-clip-text text-2xl sm:text-3xl md:text-4xl'
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial='hidden'
            animate='visible'
            className='flex w-full items-center justify-center lg:justify-between'
          >
            <div className='flex flex-col items-center justify-center'>
              <SmallCircularRevealHeadingDemo />
              <p className='md:text-md mx-auto mb-16 mt-6 max-w-xl font-black tracking-tight text-white/40 sm:text-sm'>
                Training Champions for Life
              </p>
            </div>
            <div className='hidden lg:inline-flex'>
              <InfiniteSliderVertical />
            </div>
          </motion.div>
        </div>
        <AnimatedJoinButton />
      </div>

      <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-[#548f6f]/10 via-[#181818]/40 to-[#030303]/80' />
    </div>
  )
}

export { HeroGeometric }
