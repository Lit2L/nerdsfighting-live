'use client'

import Image from 'next/image'
import emptyBasket from '@/public/shopping-cart-empty.png'
import priceFormat from '@/utils/priceFormat'
import { useCartStore } from '@/zustand/store'
import { AnimatePresence, motion } from 'framer-motion'
import { CgClose } from 'react-icons/cg'
import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5'
import { TbSquareRoundedMinus, TbSquareRoundedPlus } from 'react-icons/tb'

import Checkout from './Checkout'
import OrderConfirmed from './OrderConfirmed'

export default function Cart() {
  const cartStore = useCartStore()
  console.log('<Cart>: ', cartStore)
  // Reduce to get total price:
  const totalPrice = cartStore.cart.reduce((acc, item) => {
    return acc + item.unit_amount! * item.quantity!
  }, 0)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => cartStore.toggleCart()}
      className='fixed bottom-0 right-0 top-0 z-50 h-screen w-full backdrop-blur-sm'
    >
      {/* Shopping Panel */}
      <motion.section
        layout
        onClick={(e) => e.stopPropagation()}
        className='absolute right-0 top-0 h-screen w-8/12 overflow-y-scroll bg-blue-700 p-12 shadow-md lg:w-2/5'
      >
        {/* Conditional Headings */}
        {cartStore.onCheckout === 'cart' && (
          <div className='mb-12 flex items-center justify-between'>
            <h1 className='text-2xl font-bold'>Your shopping cart</h1>
            <CgClose
              aria-hidden='true'
              className='size-9 cursor-pointer'
              onClick={() => cartStore.toggleCart()}
            />
          </div>
        )}
        {cartStore.onCheckout === 'checkout' && (
          <div className='mb-12 flex items-center justify-between'>
            <h1 className='text-2xl font-bold'>Check your cart</h1>
            <CgClose
              className='size-8 cursor-pointer'
              onClick={() => cartStore.setCheckout('cart')}
            />
          </div>
        )}

        {/* Items in Cart */}
        {cartStore.onCheckout === 'cart' && (
          <>
            {cartStore.cart.map((item) => (
              /* Each Item */
              <motion.article
                key={item.id}
                layout
                className='bg-base-200 mt-3 flex gap-4 rounded-lg p-4'
              >
                <Image
                  className='h-24 w-24 rounded-full object-cover shadow'
                  src={item.image}
                  alt={item.name}
                  width={110}
                  height={110}
                  priority
                />
                <motion.div className='flex flex-col'>
                  <h2 className='text-sm font-semibold'>{item.name}</h2>
                  <div className='flex items-center gap-2'>
                    <h2 className='text-sm'>Qty: {item.quantity}</h2>
                    <button onClick={() => cartStore.removeProduct(item)}>
                      <TbSquareRoundedMinus className='size-6 cursor-pointer transition duration-100 ease-in-out hover:scale-125 hover:text-red-500 hover:drop-shadow-md' />
                    </button>
                    <button onClick={() => cartStore.addProduct(item)}>
                      <TbSquareRoundedPlus className='size-6 cursor-pointer transition duration-100 ease-in-out hover:scale-125 hover:text-green-500 hover:drop-shadow-md' />
                    </button>
                  </div>
                  <h2 className='text-md mt-auto font-bold tracking-wide'>
                    {item.unit_amount && priceFormat(item.unit_amount)}
                  </h2>
                </motion.div>
              </motion.article>
            ))}
          </>
        )}

        {/* Total */}
        {cartStore.cart.length > 0 && cartStore.onCheckout === 'cart' ? (
          <motion.div layout>
            <p className='mt-6 py-2 font-bold'>
              <span className='font-bold'>Total:</span> {priceFormat(totalPrice)}
            </p>
            <button
              onClick={() => cartStore.setCheckout('checkout')}
              className='my-4 w-full border p-1 font-bold'
            >
              Checkout
            </button>
          </motion.div>
        ) : null}

        {/* Checkout Form */}
        {cartStore.onCheckout === 'checkout' && <Checkout />}
        {cartStore.onCheckout === 'success' && <OrderConfirmed />}

        {/* Empty Cart Status */}
        {cartStore.cart.length === 0 && cartStore.onCheckout === 'cart' && (
          <motion.div
            initial={{ scale: 0.5, rotateZ: -10, opacity: 0 }}
            animate={{ scale: 1, rotateZ: 0, opacity: 0.75 }}
            className='flex h-[90%] w-full flex-col items-center justify-center gap-2'
          >
            <Image
              src={emptyBasket}
              alt='Empty basket'
              width={200}
              height={200}
              priority
              className='object-cover'
            />
            <h2 className='text-lg font-semibold'>Ohh no its empty :(</h2>
          </motion.div>
        )}
      </motion.section>
    </motion.div>
  )
}
