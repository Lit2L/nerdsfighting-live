import { AnimatedJoinButton } from '../AnimatedJoinButton'
import GradualSpacing from '../gradual-spacing'
import Logo from '../Logo'
import { Badge } from '../ui/badge'

export default async function HeroLanding() {
  return (
    <section
      id='hero'
      className='relative mx-auto mt-20 flex h-full flex-col items-center justify-between py-20 md:min-h-screen'
    >
      <div className='bgImage' />
      <div className='flex flex-col items-center justify-center pt-6 md:pt-16'>
        {/* TOP */}

        <div className='flex w-full flex-col items-center gap-16'>
          <Badge className='md:text-md w-[17rem] bg-gradient-to-r from-[#548f6f] via-black/90 to-[#e01b6e]/60 p-1 text-center font-orbitron text-[9px] font-bold uppercase tracking-wide text-white shadow-lg shadow-[#548f6f] md:w-[20rem] md:tracking-widest'>
            New Muay Thai & Kickboxing Training Gym
          </Badge>
          <GradualSpacing
            className='text-gradient_greens font-orbitron font-bold uppercase tracking-widest'
            text='Nerds Fighting'
          />
        </div>

        {/* MIDDLE */}
        <div className=''>
          <p className='text-center font-orbitron text-xs text-muted-foreground md:text-sm'>
            Fueled by Ambition
          </p>
          <Logo />
          <p className='text-center font-orbitron text-xs text-muted-foreground md:text-sm'>
            Forged in Repetition
          </p>
        </div>

        {/* BOTTOM */}
        <div className='mt-12 w-full'>
          <AnimatedJoinButton />
          {/* <FlipWordsComponent /> */}
        </div>
      </div>
    </section>
  )
}
