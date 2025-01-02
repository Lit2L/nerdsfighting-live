import Link from 'next/link'

import { cn } from '@/lib/utils'
import AnimatedShinyText from '@/components/ui/animated-shiny-text'

export function AnimatedJoinButton() {
  return (
    <div className='z-10 flex items-center justify-center'>
      <Link
        href='https://calendly.com/spiderbear714/free-trial-class'
        className={cn(
          'group flex h-8 w-72 scale-100 items-center rounded-lg border-2 border-black/5 bg-[#548f6f] transition-all ease-in hover:scale-95 hover:cursor-pointer hover:border-double hover:border-orange-900 hover:bg-neutral-200 dark:border-white/5 dark:hover:bg-neutral-800 sm:h-9 sm:w-48'
        )}
      >
        <AnimatedShinyText className='inline-flex items-center justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
          <span className='mr-3 scale-x-[-1] transition-transform ease-in-out group-hover:translate-x-2'>
            🥊
          </span>
          <span className='font-urban text-[14px] font-bold capitalize text-white'>
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
