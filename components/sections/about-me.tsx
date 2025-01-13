import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function AboutMe() {
  return (
    <section className='relative w-full py-24'>
      <div className='bgAboutMe' />
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='mb-24 flex flex-col items-center gap-16 lg:flex-row'>
          <div className='w-full lg:w-1/2'>
            <div className='w-full space-y-8 lg:w-1/2'>
              <h2 className='text-4xl font-bold tracking-tight'>About Us</h2>
              <p className='text-2xl font-light text-gray-600'>
                Train Like a Fighter, Get Fit for Life
              </p>
              <p className='text-lg tracking-wide text-gray-500'>MUAY THAI · BOXING · KICKBOXING</p>
              <Button asChild variant='outline' size='lg' className='rounded-none'>
                <Link href='/learn-more'>Learn More</Link>
              </Button>
            </div>
            <Image
              src='/_static/photos/collage.png'
              alt='MMA Gym'
              width={600}
              height={600}
              className='h-[600px] w-full rounded-lg object-contain'
            />
          </div>
        </div>

        <div className='grid gap-16 lg:grid-cols-2'>
          <div className='space-y-4'>
            <h3 className='text-2xl font-semibold'>OUR STORY</h3>
            <p className='text-md leading-6 text-gray-400'>
              I&apos;m Larry and I&apos;m the head coach of Nerds Fighting located in partner with
              Williams MMA Academy. For over 17 years I&apos;ve been on a journey of self-discover,
              training, competing in martia others because I believe in the power of martial arts to
              transform lives.
              <span className='text-gradient_greens font-orbitron text-xl font-bold'>
                Nerds Fighting!{' '}
              </span>
              {''} to share with the world I&apos;ve . gave me a chance to heal some to work My goal
              is to share to the world I love martial arts and almost everything about. Martial Arts
              gave me the outlet I needed to overcome
              <span className='text-gradient_greens font-orbitron text-xl font-bold'>
                Nerds Fighting!{' '}
              </span>
              {''}
              Fountain Valley&apos;s newest and most innovative Martial Arts and Fitness club!
              Whether you&apos;re a fitness enthusiast or an aspiring martial artist, we are here to
              help you achieve your goals. Take part in building a unique team that thrives on smart
              training, personal growth, and lifelong fitness.
            </p>
          </div>
          <div className='space-y-4'>
            <h3 className='text-2xl font-semibold'>OUR CODE</h3>
            <p className='leading-relaxed text-gray-600'>
              At{' '}
              <span className='text-gradient_greens font-orbitron text-xl font-bold'>
                Nerds Fighting!{' '}
              </span>
              {''}, growth drives everything we do. We believe in the power of working together,
              whether it’s supporting someone on a fitness journey or training for the ultimate
              championship. Success isn’t achieved in isolation—it’s a shared effort built on mutual
              encouragement and collective determination. Our mission goes beyond personal
              achievement; we’re dedicated to making a positive impact on others, creating an
              environment where everyone can thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
