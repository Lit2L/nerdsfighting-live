'use client'

import Image from 'next/image'
import { priceFormat } from '@/utils/priceFormat'
import { useCartStore } from '@/zustand/store'
import { AnimatePresence, motion } from 'framer-motion'
import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5'

import Checkout from './Checkout'
import OrderConfirmed from './OrderConfirmed'

export default function Cart() {
  const cartStore = useCartStore()

  //Total Price
  const totalPrice = cartStore.cart.reduce((acc, item) => {
    return acc + item.unit_amount! * item.quantity!
  }, 0)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => cartStore.toggleCart()}
      className='fixed left-0 top-0 h-screen w-full bg-black/20'
    >
      {/* Cart */}
      <motion.div
        layout
        onClick={(e) => e.stopPropagation()}
        className='bg-base-200 absolute right-0 top-0 h-screen w-full overflow-y-scroll p-12 lg:w-2/5'
      >
        {cartStore.onCheckout === 'cart' && (
          <button onClick={() => cartStore.toggleCart()} className='pb-12 text-sm font-bold'>
            Back to store 🏃
          </button>
        )}
        {cartStore.onCheckout === 'checkout' && (
          <button onClick={() => cartStore.setCheckout('cart')} className='pb-12 text-sm font-bold'>
            Check your cart 🛒
          </button>
        )}
        {/* Cart Items */}
        {cartStore.onCheckout === 'cart' && (
          <>
            {cartStore.cart.map((item) => (
              <motion.div
                layout
                key={item.id}
                className='bg-base-100 my-4 flex gap-4 rounded-lg p-4'
              >
                <Image
                  className='h-24 rounded-md'
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                />
                <div>
                  <h2>{item.name}</h2>
                  {/* Update quantity of a product */}
                  <div className='flex gap-2'>
                    <h2>Quantity: {item.quantity}</h2>
                    <button
                      onClick={() =>
                        cartStore.removeProduct({
                          id: item.id,
                          image: item.image,
                          name: item.name,
                          unit_amount: item.unit_amount,
                          quantity: item.quantity
                        })
                      }
                    >
                      <IoRemoveCircle />
                    </button>
                    <button
                      onClick={() =>
                        cartStore.addProduct({
                          id: item.id,
                          image: item.image,
                          name: item.name,
                          unit_amount: item.unit_amount,
                          quantity: item.quantity
                        })
                      }
                    >
                      <IoAddCircle />
                    </button>
                  </div>

                  <p className='text-sm'>{item.unit_amount && priceFormat(item.unit_amount)}</p>
                </div>
              </motion.div>
            ))}
          </>
        )}
        {/* Checkout and total */}
        {cartStore.cart.length > 0 && cartStore.onCheckout === 'cart' ? (
          <motion.div layout>
            <p>Total: {priceFormat(totalPrice)}</p>
            <button
              onClick={() => cartStore.setCheckout('checkout')}
              className='mt-4 w-full rounded-md bg-primary py-2 text-white'
            >
              Checkout
            </button>
          </motion.div>
        ) : null}
        {/* Checkout Form */}
        {cartStore.onCheckout === 'checkout' && <Checkout />}
        {cartStore.onCheckout === 'success' && <OrderConfirmed />}
        <AnimatePresence>
          {!cartStore.cart.length && cartStore.onCheckout === 'cart' && (
            <motion.div
              animate={{ scale: 1, rotateZ: 0, opacity: 0.75 }}
              initial={{ scale: 0.5, rotateZ: -10, opacity: 0 }}
              exit={{ scale: 0.5, rotateZ: -10, opacity: 0 }}
              className='flex flex-col items-center gap-12 pt-56 text-2xl font-medium opacity-75'
            >
              <h1>Uhhh ohhh...it&apos;s empty 😢</h1>
              <Image src='/basket.png' alt='empty cart' width={200} height={200} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
