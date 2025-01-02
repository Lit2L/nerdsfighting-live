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
    <section id='hero' className='relative min-h-screen'>
      <div className='bgImage'></div>
      <div className='container flex max-w-5xl flex-col items-center justify-center space-y-16 pt-12 text-center'>
        {/* TOP */}

        <div className='flex w-full flex-col items-center justify-center gap-6'>
          <Badge
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg', rounded: 'xl' }),
              'md:text-md max-w-xl border-4 border-[green2] px-4 text-center font-heading text-[9px] uppercase tracking-wide sm:tracking-wide md:text-xs'
            )}
          >
            <Image
              alt='logo'
              src='/logoNF.png'
              width={100}
              height={100}
              className='mr-2 size-3.5'
            />
            <span className='hidden md:flex'>Kickboxing&nbsp;</span> Martial Arts Training Club{' '}
            <Image
              alt='logo'
              src='/logoNF.png'
              width={100}
              height={100}
              className='ml-2 size-3.5'
            />
          </Badge>
          <GradualSpacing
            className='text-gradient_greens text-center font-urban font-bold uppercase tracking-widest md:leading-[5rem]'
            text='Nerds Fighting'
          />
        </div>
        {/* MIDDLE */}
        <div className=''>
          <p
            className='max-w-2xl text-balance font-urban leading-normal text-muted-foreground sm:text-xl sm:leading-8'
            style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
          >
            Fueled by Ambition
          </p>
          <Logo />
          <p
            className='max-w-2xl text-balance font-urban leading-normal text-muted-foreground sm:text-xl sm:leading-8'
            style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
          >
            Forged in Repetition
          </p>
        </div>

        {/* BOTTOM */}
        <div className='flex w-full items-center justify-center'>
          {/* <div
            className='flex w-1/2 justify-center'
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          > */}
          <AnimatedJoinButton />
          {/* </div> */}
          {/* <div className=''>
            <FlipWordsComponent />
          </div> */}
        </div>
      </div>
    </section>
  )
}
