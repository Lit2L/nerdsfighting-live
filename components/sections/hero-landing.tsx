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
      <div className='' />

      {/* TOP */}

      <div className='flex w-full flex-col items-center justify-center gap-6 md:gap-6'>
        <Badge className='md:text-md w-[16rem] bg-gradient-to-r from-[#172b4d] via-black/90 to-[#e01b6e]/60 p-1 text-center font-orbitron text-[9px] font-bold tracking-wider text-white shadow-lg shadow-[#2d71b7]/60 md:w-[20rem] md:tracking-widest'>
          KICKBOXING & FITNESS STUDIO
        </Badge>
        <GradualSpacing
          className='text-gradient_blues tracking-tightest font-orbitron font-bold uppercase'
          text='Nerds Fighting'
        />
      </div>

      {/* MIDDLE */}
      <div className='w-full transition-all duration-300'>
        <div className='mx-auto w-full text-center text-muted-foreground'>
          {/* <p className=''>Train Like Fighters</p> */}
          {/* <p className='text-center font-orbitron text-[8px] font-semibold capitalize tracking-tighter text-muted-foreground/50'>
            Fitness
          </p> */}
        </div>
        <div className='grid grid-cols-3 place-items-center transition-all duration-300'>
          <div className='w-full text-right'>
            {/* <p className='w-full font-orbitron text-[8px] capitalize tracking-tighter text-muted-foreground/50'>
              Flexibility
            </p> */}
          </div>
          <div className=''>
            <Logo />
          </div>
          <div className='w-full'>
            {/* <p className='text-left font-orbitron text-[8px] font-semibold capitalize tracking-tight text-muted-foreground/50'>
              Weight Loss
            </p> */}
          </div>
        </div>
        <div className='w-full text-center text-muted-foreground'>
          {/* <p className='text-center font-orbitron text-[8px] font-semibold capitalize tracking-tight text-muted-foreground/50'>
            Performance
          </p> */}
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
