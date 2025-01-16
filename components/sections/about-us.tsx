import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { ImageSliders } from '../ImagesSlider'
import { HeaderSection } from '../shared/header-section'
import MaxWidthWrapper from '../shared/max-width-wrapper'

export default function AboutUs() {
  return (
    <section className='relative w-full py-20'>
      <MaxWidthWrapper>
        <HeaderSection label='' title='About Us' subtitle='Why Train With Nerds?' />
      </MaxWidthWrapper>
      <div className='bgAboutUs blur-sm' />
      <div className='flex w-full flex-col-reverse pt-6 lg:flex-row lg:p-6'>
        <div className='flex w-full flex-col space-y-6 p-12 lg:w-1/2'>
          <h3 className='text-left font-orbitron text-2xl font-bold'>NERDS FIGHTING</h3>
          <p className='font-orbitron text-[10px] font-bold leading-6 tracking-wide text-gray-200 md:text-sm md:leading-8'>
            {/* <span className='font-logo2 text-2xl font-bold uppercase tracking-wide text-emerald-500'>
              Nerds Fighting{' '}
            </span> */}
            At Nerds Fighting, we don&apos;t just teach martial arts
            <br /> We craft warriors. <br />
            <br />
            Our holistic approach to training blends the art of eight limbs with mindfulness,
            effective training, and self-mastery for the ring, street, and life.
            <br />
            <br />
            Transform your life by transforming your belief in yourself. Confidence, focus, and
            readiness aren&apos;t just results—they&apos;re life skills you&apos;ll carry with you
            everywhere. Gain the edge you need for success—in the gym, at work, or anywhere in life.
            <br />
            <br />
            Because anything can happen, you deserve to be ready.
            <br /> Life is better when you know how to fight.
          </p>
        </div>
        <div className='w-full lg:w-1/2'>
          <ImageSliders />

          <p className='text-gradient_pinks text-md text-center font-bold tracking-tight'>
            MUAY THAI · BOXING · KICKBOXING
          </p>
        </div>
        {/* <Button asChild variant='outline' size='lg' className='rounded-none'>
                <Link href='/pricing'>Learn More</Link>
              </Button> */}
      </div>
    </section>
  )
}
