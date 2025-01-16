import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import priceFormat from '@/utils/priceFormat'

import { ProductType } from '@/types/ProductType'

export default function Product({
  id,
  name,
  image,
  unit_amount,
  description,
  metadata: { features }
}: ProductType) {
  console.log({ id, name, image, unit_amount, features })

  return (
    <Link
      href={{
        pathname: `/product/${id}`,
        query: { id, name, image, unit_amount, description, features }
      }}
      className='overflow-hidden rounded-lg border-2 border-white/30 p-3 shadow-sm'
    >
      <div className='overflow-hidden'>
        <Image
          src={image}
          alt={name}
          width={600}
          height={600}
          className='size-80 object-cover transition-transform duration-300 hover:scale-105'
          priority
        />
      </div>
      <div className='px-2 py-4'>
        <h1 className='text-[15px] font-bold'>{name}</h1>
        <h2 className='text-sm opacity-80'>
          {unit_amount !== null ? priceFormat(unit_amount) : 'N/A'}
        </h2>
      </div>
    </Link>
  )
}
