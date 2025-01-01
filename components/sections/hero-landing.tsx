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
    <section id='hero' className='relative space-y-6 py-12 sm:py-20 lg:py-28'>
      {/* <Image
        src='/mt-bg.png'
        alt='hero'
        layout='fill'
        objectFit='cover'
        className='absolute -z-10 opacity-30'
      /> */}
      <div className='bgImage'></div>
      <div className='container flex max-w-5xl flex-col items-center gap-5 text-center'>
        <Badge
          className={cn(
            buttonVariants({ variant: 'outline', size: 'sm', rounded: 'xl' }),
            'md:text-md bg-gradient-to-r from-gray-500 via-gray-300/70 to-gray-500/90 px-4 text-center font-heading text-[9px] uppercase tracking-wide text-red-900 shadow-lg shadow-red-900 sm:tracking-wide md:text-xs'
          )}
        >
          <Image alt='logo' src='/logoNF.png' width={100} height={100} className='mr-2 size-3.5' />
          <span className='hidden md:flex'>Kickboxing&nbsp;</span> Martial Arts Training Club{' '}
          <Image alt='logo' src='/logoNF.png' width={100} height={100} className='ml-2 size-3.5' />
        </Badge>
        <GradualSpacing
          className='text-gradient_indigo-purple text-center font-urban uppercase tracking-widest md:leading-[5rem]'
          text='Nerds Fighting'
        />
        {/* MIDDLE */}
        <p
          className='font-genos max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8'
          style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
        >
          Fueled by Ambition
        </p>
        <Logo />
        <p
          className='font-genos max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8'
          style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
        >
          Forged in Repetition
        </p>
        <FlipWordsComponent />
        {/* <h1 className='text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[16px]'> */}
        {/* Life is better when you can{' '} */}
        {/* <span className='text-gradient_indigo-purple font-extrabold'>Fight</span> */}
        {/* <span className='text-gradient_indigo-purple font-extrabold'>Nerds Fighting</span> */}
        {/* </h1> */}

        {/* Bottom */}
        <div
          className='flex justify-center space-x-2 md:space-x-4'
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <AnimatedJoinButton />
        </div>
      </div>
    </section>
  )
}
