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
            The most amazing transformation you have yet to witness is your own. Step Into Your
            Strength and Embrace Your Inner Fighter. <br />
            <br />
            At Nerds Fighting, we want to help you get stronger, more confident, and ready to take
            on life&apos;s challenges — We believe fitness should be empowering, fun, and safe for
            everyone.
            {/* We use the magic of Muay-Thai Kickboxing as medium all while minimizing head impact at a bully-free, supportive
            team environment.  */}
            {/* Martial arts is the funnest way to Try a new hobby that will keep you active while learning one
            of the most effective martial arts in the world? Worried about safety or getting hurt?
            We set-out to create a gym culture of effective training techniques, focused on the
            things that work, why they work and how to apply them. */}
            {/* strategy and brain-safety. We&apos;ve put in our years at training gyms with barely
            interested instructors, hour-long heavy-bag classes and so on. We kept what works and
            discared what isn&apos;t necessary. Muay Thai training is best enjoyed when you
            aren&apos;t in danger of getting hurt. */}
            {/* Your mind and your body will need time to gradually change into the type of body needed elevate your Muay Thai skills as fast as you can handle
            training safe continuous martial arts training for the soul with the right environment
            and culture.  */}
            <br />
            <br />
            {/* What Is Nerds Fighting?  */}
            {/* It&apos;s more than just kickboxing fitness. It&apos;s the start of something new, a new
            journey filled with challenges, obstacles, and milestones. It&apos;s a road that leads
            to empowerment, where discipline, and confidence are unlocked through training. <br /> */}
            <br />
            Nerds Fighting brings you the powerful art of Muay Thai, designed to meet your fitness
            and personal goals while ensuring safety and camaraderie. Our classes are tailored to
            help individuals of all backgrounds to improve their fitness, develop life-skills, and
            discover a version of themselves they never knew existed.
            {/* Our holistic approach to training blends the art of eight limbs with mindful effective
            training, and self-mastery for the ring, street, and life. */}
            {/* Transform your life by transforming how you see yourself. Strength, striking abilities
            and confidence aren&apos;t just outcomes of our training, They&apos;re the type of
            skills and tools that you&apos;ll be grateful to have when you need them. Tackling
            obstacles after a nerd workout will seem like a walk in the park. */}
            <br />
            <br />
            {/* Too many people go without realizing what they&apos;re capable of. Our mission to awaken
            that spirit and guide you through a journey of transformation. */}
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
