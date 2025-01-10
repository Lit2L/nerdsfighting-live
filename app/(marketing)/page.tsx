import getProducts from '@/utils/getProducts'
import Stripe from 'stripe'

import { env } from '@/env.mjs'
import { stripe } from '@/lib/stripe'
import Product from '@/components/products/Product'
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
  // const products = await getProducts()
  return (
    <>
      <HeroLanding />
      <AboutUs />
      <TrainingCards />
      {/* <AboutMe /> */}
      <Testimonials />
      {/* <div className='grid-cols-fluid grid w-full place-items-center'>
        {products.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div> */}
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
