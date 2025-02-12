'use client'

import { AnimatePresence, motion, Variants } from 'framer-motion'

import { cn } from '@/lib/utils'

interface GradualSpacingProps {
  text: string
  duration?: number
  delayMultiple?: number
  framerProps?: Variants
  className?: string
}

export default function GradualSpacing({
  text,
  duration = 6,
  delayMultiple = 0.1,
  framerProps = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  },
  className
}: GradualSpacingProps) {
  return (
    <div className='flex justify-center tracking-widest md:space-x-1'>
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.h1
            key={i}
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn(
              'text-[32px] font-bold tracking-widest drop-shadow-2xl transition-all duration-300 sm:text-[40px] md:text-6xl md:tracking-tight lg:text-7xl',
              className
            )}
          >
            {char === '' ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  )
}
