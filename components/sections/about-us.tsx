import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { ImageSliders } from '../ImagesSlider'
import { HeaderSection } from '../shared/header-section'
import MaxWidthWrapper from '../shared/max-width-wrapper'
import { AspectRatio } from '../ui/aspect-ratio'

export default function AboutUs() {
  return (
    <section className='relative my-24 w-full'>
      <MaxWidthWrapper>
        <HeaderSection label='' title='About Us' subtitle='Why Train With Nerds?' />
      </MaxWidthWrapper>
      <div className='bgAboutUs' />
      <div className='flex w-full flex-col border-4 text-center'>
        <ImageSliders />

        <p className='text-gradient_pinks pl-6 text-lg tracking-wide text-gray-500'>
          MUAY THAI · BOXING · KICKBOXING
        </p>
        {/* <Button asChild variant='outline' size='lg' className='rounded-none'>
                <Link href='/pricing'>Learn More</Link>
              </Button> */}
      </div>
      <div className='border-4'>
        <h3 className='text-2xl font-semibold'>OUR STORY</h3>
        <p className='font-genos text-xl font-semibold leading-8 tracking-tight text-gray-300'>
          At{' '}
          <span className='font-logo2 text-2xl font-bold uppercase tracking-wide text-emerald-500'>
            Nerds Fighting{' '}
          </span>
          {''}
          we believe everyone has untapped potential. Our training is more than fitness—it’s about
          pushing beyond your perceived limits, giving you the tools to dominate wherever you go.
          You’re not here to be ordinary. Train like it.
        </p>
      </div>{' '}
    </section>
  )
}
