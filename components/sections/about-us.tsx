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
          <p className='font-orbitron text-[10px] font-bold leading-6 tracking-wider text-gray-200 md:text-[12px]'>
            {/* <span className='font-logo2 text-2xl font-bold uppercase tracking-wide text-emerald-500'>
              Nerds Fighting{' '}
            </span> */}
            {/* At Nerds Fighting, We train modern-day warriors. <br /> */}
            {/* investing in yourself by staying active is normally on hold for family, social-life,
            school, work etc. We want to maximize your time with by With all the ways to stay active
            today. */}
            Do you want to maximize your gym time? Want to try a hobby that will keep you active
            while learning one of the most effective martial arts in the world? We all have a life
            outside the gym and we want you to return to that life injury-free. Our holistic
            approach to training blends the art of eight limbs with mindfulness, effective training,
            and self-mastery for the ring, street, and life.
            <br />
            <br />
            Transform your life by transforming how you see yourself. Strength, striking abilities
            and confidence aren&apos;t just outcomes of our training, They&apos;re the type of
            skills and tools that you&apos;ll be grateful to have when you need them. Tackling
            obstacles after a nerd workout will seem like a walk in the park.
            <br />
            <br />
            Too many of us pass through life without realizing what we&apos;re capable of. A warrior
            spirit lies dormant within you. Our mission to awaken that spirit and guide you through
            a journey of transformation.
            {/* <br /> Life is better when you know how to fight. */}
          </p>
        </div>
        <div className='w-full lg:w-1/2'>
          <ImageSliders />

          {/* <p className='text-gradient_pinks text-md text-center font-bold tracking-tight'>
            MUAY THAI · BOXING · KICKBOXING
          </p> */}
        </div>
        {/* <Button asChild variant='outline' size='lg' className='rounded-none'>
                <Link href='/pricing'>Learn More</Link>
              </Button> */}
      </div>
    </section>
  )
}
