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

const getProducts = async () => {
  const products = await stripe.products.list()
  // Here we alter the products array to include the prices for each product as
  // well as the product information. The Promise.all() method allows us to run
  // all promises in parallel & wait for them to resolve before returning data.
  const productsWithPrices = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({ product: product.id })
      const features = product.metadata.features || '' // extract features
      return {
        // ...product,
        // prices: prices.data,
        // 👇🏻 Alternatively we can structure the return object to only include:
        id: product.id,
        name: product.name,
        unit_amount: prices.data[0].unit_amount,
        image: product.images[0],
        currency: prices.data[0].currency,
        description: product.description,
        metadata: { features }
      }
    })
  )
  return productsWithPrices
}

export default async function IndexPage() {
  const products = await getProducts()
  return (
    <>
      <HeroLanding />
      <AboutUs />
      <TrainingCards />
      {/* <AboutMe /> */}
      <Testimonials />
      {/* <div className='grid w-full grid-cols-3 place-items-center'>
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
