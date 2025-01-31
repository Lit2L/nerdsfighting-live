import AnimatedTestimonialsDemo from '@/components/AnimatedTestimonials'
import { CardDemo } from '@/components/CardBackgroundOverlay'
import { BentoGridGalleryDemo } from '@/components/interactive-bento-gallery-demo'
import AboutUs from '@/components/sections/about-us'
import BentoGrid from '@/components/sections/bentogrid'
import Features from '@/components/sections/features'
import HeroLanding from '@/components/sections/hero-landing'
import { AnimatedPinLocation } from '@/components/sections/Location'
import { Schedule } from '@/components/sections/schedule'
import { TrainingCards } from '@/components/sections/TrainingCards'

export default async function IndexPage() {
  return (
    <>
      <HeroLanding />
      <AboutUs />
      <AnimatedTestimonialsDemo />
      <TrainingCards />
      <Schedule />
      <AnimatedPinLocation />
      {/* <PreviewLanding /> */}
      {/* <Features /> */}
      {/* <Powered /> */}
      {/* <BentoGridGalleryDemo /> */}
    </>
  )
}
