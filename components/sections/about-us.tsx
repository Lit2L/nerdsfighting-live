import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function AboutUs() {
  return (
    <section className='relative w-full border-4 py-24'>
      <div className='bgAboutUs' />
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='mb-24 flex flex-col items-center gap-16 lg:flex-row'>
          <div className='flex w-full flex-col items-center justify-between md:flex-row'>
            <div className='w-full space-y-8 lg:w-1/2'>
              <h2 className='text-4xl font-bold tracking-tight'>About Us</h2>
              <p className='text-2xl font-light text-gray-400'>
                Train Like a Fighter, Get Fit for Life
              </p>
              <p className='text-gradient_pinks pl-6 text-lg tracking-wide text-gray-500'>
                MUAY THAI · BOXING · KICKBOXING
              </p>
              <Button asChild variant='outline' size='lg' className='rounded-none'>
                <Link href='/pricing'>Learn More</Link>
              </Button>
            </div>
            <div className='opacity-90'>
              <Image
                src='/_static/photos/nerd-collage2.png'
                alt='MMA Gym'
                width={300}
                height={300}
                className='hidden w-full object-cover md:inline-block'
              />
            </div>
          </div>
        </div>

        <div className='w-full justify-around lg:grid-cols-2'>
          <div className='w-1/2 space-y-4'>
            <h3 className='text-2xl font-semibold'>OUR STORY</h3>
            <p className='text-md leading-8 text-gray-400'>
              <span className='text-gradient_greens font-genos text-xl font-bold'>
                Nerds Fighting{' '}
              </span>
              {''}
              is the result of terrified nerds who discovered their power through Muay Thai
              Kickboxing & Martial Arts. Decades of training, competing and coaching has lead to a
              training style that protects your brain while allowing your body to adapt naturally to
              the demands of Martial Arts training. <br />
              <br />
              Whether you&apos;re a fitness enthusiast or an aspiring martial artist or fighter, we
              are here to help you achieve your goals. Try our Free kickboxing class and see for
              yourself!
            </p>
          </div>
          <div className='w-1/2 space-y-4'>
            {/* <h3 className='text-2xl font-semibold'> */}
            {/* The{' '} */}
            {/* <span className='text-gradient_greens font-orbitron text-2xl font-bold'>
                Nerds Fighting{' '}
              </span> */}
            {/* {''}ETHOS
            </h3> */}
            {/* <p className='leading-relaxed text-gray-600'>
              The{' '}
              <span className='text-gradient_greens font-orbitron text-xl font-bold'>
                Nerds Fighting{' '}
              </span>
              Its simple, We have to stay active to live long and healthy lives. We could all join
              the gym but why not spend your time training in Martial Arts where not only will you
              get strong and fit but also leave with more flexibility, self-defense skills,
              increased mental sharpness, just to name a few. <br />
              we believe that the personal growth, the benefits of Martial Arts training should not
              be know how boundless the benefits Our philosophy revolves around the wisdom
              shouldn&apos;t have to sacrifice philosophy believes that martial arts should be
              growth drives everything we do. We believe in the power of working together, whether
              it’s supporting someone on a fitness journey or training for the ultimate
              championship. Success isn’t achieved in isolation—it’s a shared effort built on mutual
              encouragement and collective determination. Our mission goes beyond personal
              achievement; we’re dedicated to making a positive impact on others, creating an
              environment where everyone can thrive.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  )
}
