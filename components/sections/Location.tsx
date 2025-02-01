'use client'

import React from 'react'
import Image from 'next/image'

import { PinContainer } from '@/components/ui/location-pin'

import { HeaderSection } from '../shared/header-section'
import MaxWidthWrapper from '../shared/max-width-wrapper'

export function AnimatedPinLocation() {
  return (
    <div className='relative w-full bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] py-36'>
      <MaxWidthWrapper>
        <HeaderSection label='' title='Location' subtitle='Why Train With Nerds?' />
      </MaxWidthWrapper>
      <div className='absolute relative bottom-0 left-0 right-0 top-0 h-full w-full'>
        <PinContainer title='NERDS FIGHTING KICKBOXING CLUB' href='https://www.williamsmma.com/'>
          <div className='flex h-[20rem] w-[20rem] basis-full flex-col border-4 p-4 tracking-tight text-slate-100/50 sm:basis-1/2'>
            <h3 className='!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100'>
              <span className='font-genos text-lg font-medium text-slate-500'>
                Nerds Fighting Martial Arts
              </span>
              <br />& Williams Academy of MMA
            </h3>
            <div className='!m-0 !p-0 text-base font-normal'>
              <span className='font-genos text-lg font-bold tracking-wide text-slate-500'>
                8780 Warner Ave, Suite 7 <br />
                Fountain Valley, CA 92708
              </span>
            </div>
            <Image src='/_static/photos/location.png' width={400} height={400} alt='location' />
            {/* <div className='mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500' /> */}
          </div>
        </PinContainer>
      </div>
    </div>
  )
}
