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
      description: [
        'Less than 1% train in Martial Arts.',
        'Carry the benefits of training into your daily life.',
        'Real confidence comes from knowing you can handle yourself in any situation.'
      ],
      image: '/_static/photos/2.png'
    },
    {
      title: 'Stress Relief & Mental Clarity',
      description: [
        'A perfect outlet to release stress, tension, and anxiety.',
        'Rebalace & recharge',
        'Leave workouts feeling grounded & Zen.'
      ],
      image: '/_static/photos/111111.png'
    },
    {
      title: 'Find Your Flow State',
      // subtitle: 'Find Your Rhythm, Unlock Your Potential',
      description: [
        'Learn to be present.',
        'Find your rhythm and balance.'
        // 'Overcome fear, doubt and distractions.',
        // 'Martial Arts is about mastering yourself.',
        // 'Flow your way into smooth, movements with purpose and power.'

        // 'Practice the Dance of Muay Thai while in your flow state watch yourself grow. Develop balance with every move you make.'

        // 'Experience the after-workout Buzz Mental Peace & Clarity that results from a connecting mind, body and soul.'
      ],
      image: '/_static/photos/privatecoach.png'
    },
    {
      title: 'Excellent for Beginners & Hobbyists',
      description: [
        'Working professionals, students, parents, or anyone looking for something new.',
        'Safe and Controlled Environment.',
        'Get fit while having fun learning important life skills.'
      ],
      image: '/_static/photos/nerds-team.jpeg'
    },
    {
      title: 'Teamwork & Camaraderie',
      description: [
        'Work together as a team to achieve your goals.',
        `Lift others towards their goals, while they lift you towards yours.`
        // 'You never forget the people you grow with.'
      ],
      image: '/_static/photos/gauntlet1.png'
    },

    {
      title: 'Play Based Learning',
      description: [
        'Play is the highest form of research.',
        'Learn through challenges and mental games.'
      ],
      image: '/_static/photos/game.png'
    }
  ]

  return (
    <section id='training' className='relative mx-auto w-full max-w-full py-24'>
      <div className='bgTraining'></div>
      <MaxWidthWrapper>
        <HeaderSection label='' title='Init Together' subtitle='' />
      </MaxWidthWrapper>
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
