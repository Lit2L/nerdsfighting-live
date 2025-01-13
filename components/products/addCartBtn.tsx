'use client'

import { useState } from 'react'
import { useCartStore } from '@/zustand/store'

import { AddCartType } from '@/types/AddCartType'

export default function AddCartBtn({ id, name, image, unit_amount, quantity }: AddCartType) {
  const [added, setAdded] = useState(false)
  const cartStore = useCartStore()

  const handleAddToCart = () => {
    cartStore.addProduct({ id, name, image, unit_amount, quantity })
    setAdded(true)
    setTimeout(() => {
      setAdded(false)
    }, 1000)
  }

  return (
    <div className='mt-auto pt-6'>
      <button
        onClick={handleAddToCart}
        className='bg-black/50 p-3 shadow-sm shadow-white/70 transition-all duration-300 hover:border-double hover:font-bold hover:shadow-none'
        disabled={added}
      >
        {!added ? (
          <span className='text-gradient_greens tracking-wider'>Add to Cart </span>
        ) : (
          <span className='text-gradient_pinks tracking-wider'>Adding to Cart</span>
        )}
      </button>
    </div>
  )
}
