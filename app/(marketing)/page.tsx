import { LandingHero } from '@/components/LandingHero'
import AboutUs from '@/components/sections/about-us'
import BentoGrid from '@/components/sections/bentogrid'
import Features from '@/components/sections/features'
import { Schedule } from '@/components/sections/schedule'
import { TrainingCards } from '@/components/sections/TrainingCards'

export default async function IndexPage() {
  return (
    <>
      {/* <HeroLanding /> */}
      <LandingHero />
      <AboutUs />
      {/* <LoadingCarousel /> */}
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
