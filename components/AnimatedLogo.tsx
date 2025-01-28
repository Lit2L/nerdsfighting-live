import { CircularRevealHeading } from '@/components/ui/circular-reveal-heading'

import Logo from './Logo'

// Note: ***When you hover on text it takes some time to load image***
const items = [
  {
    text: 'NERDS FIGHTING',
    image: '/_static/kwa-lay_480.mp4'
  },
  {
    text: 'CARDIO KICKBOXING',
    image: 'https://kxptt4m9j4.ufs.sh/f/9YHhEDeslzkcZY3vRlCe5wpMsRmKntGfIu4E6OSxhgzL3kU1'
  },
  {
    text: 'MUAY-THAI TRAINING',
    image: 'https://kxptt4m9j4.ufs.sh/f/9YHhEDeslzkcz9VsoNLlt5AKuj9HqWQm3NeDUywcLSxB6Yo1'
  },
  {
    text: 'FITNESS GYM',
    image: 'https://kxptt4m9j4.ufs.sh/f/9YHhEDeslzkcypc1wWQBS4VNPtfqkpIhO7M6XUva5TzWomdZ'
  }
]

export function MediumCircularRevealHeadingDemo() {
  return (
    <div className='flex min-h-screen items-center justify-center p-16'>
      <CircularRevealHeading
        items={items}
        centerText={<div className='text-xl font-bold text-[#181818]'>NERDS FIGHTING</div>}
        size='md'
      />
    </div>
  )
}

export function LargeCircularRevealHeadingDemo() {
  return (
    <div className='flex min-h-screen items-center justify-center p-16'>
      <CircularRevealHeading
        items={items}
        centerText={<div className='text-2xl font-bold text-[#444444]'>NF</div>}
        size='lg'
      />
    </div>
  )
}

export function SmallCircularRevealHeadingDemo() {
  return (
    <div className='relative flex w-full items-center justify-center'>
      <CircularRevealHeading
        items={items}
        centerText={
          <div className='rounded-2xl bg-red-500/50 px-2 text-xs font-black'>
            {/* NERDS FIGHTING */}
          </div>
        }
        size='sm'
      />
      <div className='absolute top-0 translate-y-10 scale-75'>
        <Logo />
      </div>
    </div>
  )
}
