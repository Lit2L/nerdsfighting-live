import AnimatedTestimonialsDemo from '@/components/AnimatedTestimonials'
import { LandingHero } from '@/components/LandingHero'
import AboutUs from '@/components/sections/about-us'
import BentoGrid from '@/components/sections/bentogrid'
import Features from '@/components/sections/features'
import HeroLanding from '@/components/sections/hero-landing'
import { Schedule } from '@/components/sections/schedule'
import { TrainingCards } from '@/components/sections/TrainingCards'
import SpotlightNewDemo from '@/components/Spotlight'

export default async function IndexPage() {
  return (
    <>
      <HeroLanding />

      {/* <LandingHero /> */}
      <AboutUs />
      {/* <LoadingCarousel /> */}
      <AnimatedTestimonialsDemo />
      <TrainingCards />
      {/* <Testimonials /> */}
      <Schedule />
      {/* <Card07 /> */}
      {/* <PreviewLanding /> */}
      {/* <Features /> */}
      {/* <Powered /> */}
      {/* <BentoGrid /> */}
    </>
  )
}
