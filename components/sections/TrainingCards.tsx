import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle
} from '@/components/ui/minimal-card'

import { FlipWordsComponent } from '../FlipWordsComponent'
import { HeaderSection } from '../shared/header-section'
import MaxWidthWrapper from '../shared/max-width-wrapper'

export function TrainingCards() {
  const cards = [
    {
      title: 'Gain an Edge',
      description: ['Less than 1% train in Martial Arts.', 'Feel confident anywhere.'],
      image: '/_static/photos/2.png'
    },
    {
      title: 'Find Your Balance',
      description: [
        'Outlet to release stress, tension and anxiety levels.',
        'Experience the after workout buzz.'
      ],
      image: '/_static/photos/111111.png'
    },
    {
      title: 'Flow State',
      description: [
        'Sharpen your focus, precision, reaction times while flowing.',
        'Flow from one move into the next one gracefully.'
      ],
      image: '/_static/photos/privatecoach.png'
    },

    {
      title: 'Be Humble',
      description: ['Egos are checked. No Bullying or Drama Tolerated.'],
      image: '/_static/photos/gauntlet1.png'
    },
    {
      title: 'Interactive Group Workouts',
      description: [
        'Level up with teammates, fighting is a team sport.',
        'Hold Thai pads, boxing mitts, and drill with others.'
      ],
      image: '/_static/photos/nerds1.png'
    },

    {
      title: 'Play Based Learning',
      description: [
        // 'Learn to control your emotions during intense situations.',
        // 'Dance in the magic of Muay Thai until it becomes a part of you.',
        // 'Explore, practice, and implement safely.',
        'Play is the highest form of research.',
        'Learn to control your strikes to maximize learning and sparring ability.'
      ],
      image: '/_static/photos/game.png'
    }
  ]

  return (
    <section id='training' className='relative mx-auto w-full max-w-full px-6 py-24'>
      <MaxWidthWrapper>
        <HeaderSection label='' title='Our Training' subtitle='' />
      </MaxWidthWrapper>
      <div className='bgTraining blur-sm' />

      {/* <p className='mx-auto py-6 text-center font-orbitron text-xl font-thin tracking-widest'>
        Grow Strong, Be Confident, Live Peacefully

      </p> */}

      <div className='flex min-h-[600px] flex-col justify-center space-y-4 rounded-lg p-4'>
        <FlipWordsComponent />
        <div className='relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {cards.map((card, index) => (
            <MinimalCard key={index}>
              <MinimalCardTitle>{card.title}</MinimalCardTitle>
              <MinimalCardImage src={card.image} alt={card.title} />
              {/* <MinimalCardTitle>{card.title}</MinimalCardTitle> */}
              {Array.isArray(card.description) ? (
                card.description.map((desc, index) => (
                  <MinimalCardDescription key={index}>• {desc}</MinimalCardDescription>
                ))
              ) : (
                <MinimalCardDescription>{card.description}</MinimalCardDescription>
              )}
            </MinimalCard>
          ))}
        </div>
      </div>
    </section>
  )
}
