import { AnimatedJoinButton } from '../AnimatedJoinButton'
import { FlipWordsComponent } from '../FlipWordsComponent'
import GradualSpacing from '../gradual-spacing'
import Logo from '../Logo'
import { Badge } from '../ui/badge'
import { Spotlight } from '../ui/spotlight-new'

export default async function HeroLanding() {
  return (
    <section
      id='hero'
      className='relative flex min-h-screen w-full flex-col items-center justify-center gap-6 space-y-3 bg-black/50 pt-24 text-foreground'
    >
      <div className='bgImage blur-sm' />
      <Spotlight />
      {/* TOP */}

      <div className='flex w-full flex-col items-center justify-center gap-6 md:gap-12'>
        <Badge className='md:text-md w-[16rem] bg-gradient-to-r from-[#30303030] via-black/50 to-[#e01b6e30]/10 p-1 text-center font-orbitron text-[9px] tracking-wider text-white shadow-xl shadow-[#303030] dark:text-black md:w-[20rem] md:tracking-widest'>
          KICKBOXING FITNESS STUDIO
        </Badge>
        <GradualSpacing
          className='text-gradient_yellows font-orbitron font-black uppercase drop-shadow-2xl'
          text='Nerds Fighting'
        />
      </div>

      {/* MIDDLE */}
      <div className='relative z-0 size-80 opacity-80 transition-all duration-300'>
        <Logo />
        <p className='text-center text-sm'>Training for Life</p>
      </div>

      {/* BOTTOM */}
      <div className='flex w-full flex-col items-center justify-center gap-6 md:gap-9'>
        <FlipWordsComponent />
        <AnimatedJoinButton />
        {/* <RetroButton /> */}
        {/* <FlipWordsComponent /> */}
      </div>
    </section>
  )
}
