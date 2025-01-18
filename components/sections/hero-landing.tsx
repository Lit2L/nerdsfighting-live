import { AnimatedJoinButton } from '../AnimatedJoinButton'
import { FlipWordsComponent } from '../FlipWordsComponent'
import GradualSpacing from '../gradual-spacing'
import Logo from '../Logo'
import { Badge } from '../ui/badge'

export default async function HeroLanding() {
  return (
    <section
      id='hero'
      className='relative flex w-full flex-col items-center justify-center gap-6 space-y-3 pb-36 pt-28 md:pt-40'
    >
      <div className='bgImage' />

      {/* TOP */}

      <div className='flex w-full flex-col items-center justify-center gap-6 md:gap-6'>
        <Badge className='md:text-md w-[16rem] bg-gradient-to-r from-[#548f6f] via-black/90 to-[#e01b6e]/60 p-1 text-center font-orbitron text-[9px] font-bold tracking-wider text-white shadow-lg shadow-[#548f6f] md:w-[20rem] md:tracking-widest'>
          Muay Thai Kickboxing Gym
        </Badge>
        <GradualSpacing
          className='text-gradient_greens tracking-tightest font-logo font-bold uppercase'
          text='Nerds Fighting'
        />
      </div>

      {/* MIDDLE */}
      <div className='w-full transition-all duration-300'>
        <div className='mx-auto w-full text-center text-muted-foreground'>
          {/* <p className=''>Train Like Fighters</p> */}
          <p className='text-center font-orbitron text-[8px] font-semibold capitalize tracking-tight text-muted-foreground'>
            Strategy
          </p>
        </div>
        <div className='grid grid-cols-3 place-items-center transition-all duration-300'>
          <div className='w-full text-right'>
            <p className='w-full text-right font-orbitron text-[8px] capitalize tracking-tighter text-muted-foreground'>
              Intelligence
            </p>
          </div>
          <div className='overflow-hidden'>
            <Logo />
          </div>
          <div className='w-full'>
            <p className='text-left font-orbitron text-[8px] font-semibold capitalize tracking-tight text-muted-foreground'>
              Discipline
            </p>
          </div>
        </div>
        <div className='w-full text-center text-muted-foreground'>
          <p className='text-center font-orbitron text-[8px] font-semibold capitalize tracking-tight text-muted-foreground'>
            Performance
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className='flex w-full flex-col items-center justify-center gap-6 md:gap-9'>
        <FlipWordsComponent />
        <AnimatedJoinButton />
        {/* <FlipWordsComponent /> */}
      </div>
    </section>
  )
}
