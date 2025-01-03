import { infos } from '@/config/landing'
import BentoGrid from '@/components/sections/bentogrid'
import Features from '@/components/sections/features'
import HeroLanding from '@/components/sections/hero-landing'
import { Schedule } from '@/components/sections/schedule'
import Testimonials from '@/components/sections/testimonials'
import { TrainingCards } from '@/components/sections/TrainingCards'
import {
  InfiniteSliderBasic,
  InfiniteSliderHoverSpeed,
  InfiniteSliderVertical
} from '@/components/Slider'

export default function IndexPage() {
  return (
    <>
      <HeroLanding />
      {/* <InfiniteSliderHoverSpeed /> */}
      {/* <InfiniteSliderVertical /> */}
      {/* <PreviewLanding /> */}
      <Features />
      <TrainingCards />
      <Testimonials />
      <Schedule />
      {/* <Powered /> */}
      {/* <BentoGrid /> */}
      {/* <InfoLanding data={infos[0]} reverse={true} /> */}
      {/* <InfoLanding data={infos[1]} /> */}
    </>
  )
}
