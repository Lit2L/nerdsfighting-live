import AnimatedTestimonialsDemo from '@/components/AnimatedTestimonials'
import { AnimatedPinLocation } from '@/components/Location'
import AboutUs from '@/components/sections/about-us'
import BentoGrid from '@/components/sections/bentogrid'
import Features from '@/components/sections/features'
import HeroLanding from '@/components/sections/hero-landing'
import { Schedule } from '@/components/sections/schedule'
import { TrainingCards } from '@/components/sections/TrainingCards'

export default async function IndexPage() {
  return (
    <>
      <HeroLanding />

      <AboutUs />
      {/* <LoadingCarousel /> */}
      <AnimatedTestimonialsDemo />
      <TrainingCards />
      {/* <Testimonials /> */}
      <Schedule />
      <AnimatedPinLocation />
      {/* <Card07 /> */}
      {/* <PreviewLanding /> */}
      {/* <Features /> */}
      {/* <Powered /> */}
      {/* <BentoGrid /> */}
    </>
  )
}
