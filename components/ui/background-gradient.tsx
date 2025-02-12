import React from 'react'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}) => {
  const variants = {
    initial: {
      backgroundPosition: '0 50%'
    },
    animate: {
      backgroundPosition: ['0, 50%', '100% 50%', '0 50%']
    }
  }
  return (
    <div className={cn('group relative p-[4px]', containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined
        }}
        className={cn(
          'absolute inset-0 z-[1] rounded-3xl opacity-60 blur-xl transition duration-500 will-change-transform group-hover:opacity-100',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1/50,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff/50,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414/50,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb/50,#141316/50)]'
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined
        }}
        className={cn(
          'absolute inset-0 z-[1] rounded-3xl will-change-transform',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb199,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff99,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc41499,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb99,#14131699)]'
        )}
      />

      <div className={cn('relative z-10', className)}>{children}</div>
    </div>
  )
}
