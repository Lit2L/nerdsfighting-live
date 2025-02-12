import Link from 'next/link'

import { cn } from '@/lib/utils'
import AnimatedShinyText from '@/components/ui/animated-shiny-text'

export function AnimatedJoinButton() {
  return (
    <div className='z-10 flex items-center justify-center'>
      <Link
        href='https://calendly.com/spiderbear714/free-trial-class'
        className={cn(
          'group flex h-8 w-64 scale-100 items-center rounded-md border-4 border-white/40 bg-gradient-to-bl from-black via-emerald-950 to-black transition-all ease-in hover:scale-95 hover:cursor-pointer hover:border-double hover:bg-neutral-200 sm:h-9 md:w-72'
        )}
      >
        <AnimatedShinyText className='inline-flex items-center justify-center transition-all ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
          <span className='mr-3 scale-x-[-1] transition-transform ease-in-out group-hover:translate-x-2'>
            🥊
          </span>
          <span className='font-orbitron text-xs font-black capitalize text-white/60 md:text-[12px]'>
            Start Training For Free!
          </span>

          <span className='ml-3 transition-transform ease-in-out group-hover:-translate-x-2'>
            🥊
          </span>
        </AnimatedShinyText>
      </Link>
    </div>
  )
}
