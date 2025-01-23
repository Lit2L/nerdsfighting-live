import { AnimatedJoinButton } from '../AnimatedJoinButton'
import { FlipWordsComponent } from '../FlipWordsComponent'
import GradualSpacing from '../gradual-spacing'
import Logo from '../Logo'
import { Badge } from '../ui/badge'

export default async function HeroLanding() {
  return (
    <section
      id='hero'
      className='relative flex min-h-screen w-full flex-col items-center justify-center gap-6 space-y-3'
    >
      <div className='bgImage' />

      {/* TOP */}

      <div className='flex w-full flex-col items-center justify-center gap-6 md:gap-12'>
        <Badge className='md:text-md w-[16rem] bg-gradient-to-r from-[#30303030] via-black/50 to-[#e01b6e30]/10 p-1 text-center font-genos font-orbitron text-[9px] tracking-wider text-white shadow-lg shadow-[#2d71b7]/60 dark:text-black md:w-[20rem] md:tracking-widest'>
          KICKBOXING FITNESS STUDIO
        </Badge>
        <GradualSpacing
          className='text-gradient_yellows font-logo2 uppercase drop-shadow-2xl'
          text='Nerds Fighting'
        />
      </div>

      {/* MIDDLE */}
      <div className='relative z-0 h-72 w-96 opacity-70 transition-all duration-300'>
        <div className='absolute h-72 w-96 border-double opacity-90 drop-shadow-2xl transition-all duration-300'>
          <Logo />
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
