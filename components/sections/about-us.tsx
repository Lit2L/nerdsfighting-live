import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import AnimatedTestimonialsDemo from '../AnimatedTestimonials'
import { ImageSliders } from '../ImagesSlider'
import { HeaderSection } from '../shared/header-section'
import MaxWidthWrapper from '../shared/max-width-wrapper'
import { InfiniteSliderVertical } from '../Slider'
import { InfiniteSlider } from '../ui/infinite-slider'

export default function AboutUs() {
  return (
    <section className='relative z-10 w-full py-20'>
      <MaxWidthWrapper>
        <HeaderSection label='' title='About Us' subtitle='Why Train With Nerds?' />
      </MaxWidthWrapper>
      <div className='bgAboutUs blur-md' />
      <div className='flex w-full flex-col-reverse items-center pt-6 lg:flex-row lg:p-6'>
        <div className='flex w-full flex-col space-y-6 p-12 lg:w-1/2'>
          <h3 className='text-left font-orbitron text-2xl font-bold'>NERDS FIGHTING</h3>
          <p className='font-orbitron text-[10px] font-light leading-6 tracking-wider text-gray-200 md:text-[12px]'>
            {/* <span className='font-logo2 text-2xl font-bold uppercase tracking-wide text-emerald-500'>
              Nerds Fighting{' '}
            </span> */}
            <span className='text-lg font-semibold text-pink-500/80'>
              Schedule a Free Trial Class Today!
            </span>
            <br />
            <br />
            We believe fitness should be empowering, fun, and safe for everyone. We use the magic of
            Muay Thai as a transformative tool to help you become a strong, confident and balanced
            person ready to take on life’s challenges. <br />
            <br />
            <br />
            Nerds Fighting brings you the beautiful but demanding art of Muay Thai, designed to meet
            your fitness and personal goals. Join the movement as we all rediscover our warrior
            spirit. Our classes are tailored to help individuals of all backgrounds to improve their
            fitness, striking skills, and find balance in their lives. <br />
            <br />
            <br />
          </p>
        </div>
        <div className='h-[20rem] w-full lg:w-1/2'>
          <ImageSliders />

          <Button asChild variant='outline' size='lg' className='rounded-none'>
            <Link href='/pricing'>Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
