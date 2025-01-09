import checkoutOrder from '@/public/payment.gif'
import { Player } from '@lottiefiles/react-lottie-player'
import { motion } from 'framer-motion'

export default function OrderAnimation() {
  return (
    <div className='mt-24 flex flex-col items-center justify-center p-12'>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Prepping your order
      </motion.h1>
      <Player autoplay loop src={checkoutOrder} style={{ height: '300px', width: '300px' }} />
    </div>
  )
}
