import { ProductList } from '@/components/product-list'
import { getProducts } from '@/components/products'
import AboutMe from '@/components/sections/about-me'
import AboutUs from '@/components/sections/about-us'
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

export default async function IndexPage() {
  return (
    <>
      <HeroLanding />
      {/* <AboutUs /> */}
      <TrainingCards />
      {/* <AboutMe /> */}
      <Testimonials />
      <Schedule />
      {/* <InfiniteSliderHoverSpeed /> */}
      {/* <InfiniteSliderVertical /> */}
      {/* <PreviewLanding /> */}
      {/* <Features /> */}

      {/* <Powered /> */}
      {/* <BentoGrid /> */}
      {/* <InfoLanding data={infos[0]} reverse={true} /> */}
      {/* <InfoLanding data={infos[1]} /> */}
      {/* <Holographic /> */}
    </>
  )
}
