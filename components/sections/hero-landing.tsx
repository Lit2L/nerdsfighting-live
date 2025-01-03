import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/shared/icons'

import { AnimatedJoinButton } from '../AnimatedJoinButton'
import { FlipWordsComponent } from '../FlipWordsComponent'
import GradualSpacing from '../gradual-spacing'
import Logo from '../Logo'
import { Badge } from '../ui/badge'

export default async function HeroLanding() {
  return (
    <section
      id='hero'
      className='relative flex min-h-screen w-full flex-col items-center justify-center space-y-20'
    >
      <div className='bgImage' />

      {/* TOP */}

      <div className='flex h-1/4 w-full flex-col items-center'>
        <Badge className='md:text-md w-[17rem] bg-gradient-to-r from-[#548f6f] via-black/90 to-[#e01b6e]/60 p-1 text-center font-urban text-[9px] font-bold uppercase tracking-wide text-white shadow-lg shadow-[#548f6f] md:w-[20rem] md:tracking-widest'>
          New Muay Thai & Kickboxing Training Gym
        </Badge>

        <GradualSpacing
          className='text-gradient_greens pt-3 text-center font-urban font-bold uppercase tracking-widest md:mt-6'
          text='Nerds Fighting'
        />
      </div>
      {/* MIDDLE */}
      <div className='flex h-1/4 w-full flex-col items-center'>
        <div className='mx-auto my-6 flex size-40 flex-col md:size-80 2xl:size-72'>
          <p className='text-center font-urban text-xs text-muted-foreground md:text-sm'>
            Fueled by Ambition
          </p>
          <Logo />
          <p className='text-center font-urban text-xs text-muted-foreground md:text-sm'>
            Forged in Repetition
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className='mx-auto h-1/3 w-full items-center'>
        <AnimatedJoinButton />

        {/* <FlipWordsComponent /> */}
      </div>
    </section>
  )
}
