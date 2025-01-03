import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle
} from '@/components/ui/minimal-card'

import { HeaderSection } from '../shared/header-section'
import MaxWidthWrapper from '../shared/max-width-wrapper'

export function TrainingCards() {
  const cards = [
    {
      title: 'Find Your Flowstate',
      description: [
        'Learn to Flow and Dance Circles Around Everyone.',
        'Develop your own style and rhythm.',
        'Strike with Rythym & Timing without Forcing Shots.'
      ],
      image: '/_static/photos/privatecoach.png'
    },

    {
      title: 'Choose Your Path',
      description: [
        'Live a Healthy Lifestyle and Increase Longevity',
        'Test Your Skills and Compete ',
        'Look Good, Feel Good, and Be Confident',
        'Grow at your own pace'
      ],
      image: '/_static/photos/nerds-handson.png'
    },
    {
      title: 'Video Analysis',
      description: [
        'Experienced coach analyzes your technique',
        'Teaches body mechanics and pinpoints areas for improvement',
        'Reinforces proper technique and helps develop better habits.'
      ],
      image: '/_static/photos/analysis.png'
    },
    {
      title: 'Use Your Body',
      description: [
        'Supportive group of martial artists that train together',
        'Peak performance training involves calisthenics, drills, strength conditioning, and optional group sparring'
      ],
      image: '/_static/photos/gauntlet1.png'
    },
    {
      title: 'Kickboxing',
      description: [
        'Increase Power & Speed in your strikes.',
        'Gain a sizable advantage over opponents by learning how to move strategically around your opponents.',
        'Off-balance your opponents with rhythm and proper weight shifting in your footwork.',
        'Learn how to evade, block, slip against attacks and land effective counter-attacks.'
      ],
      image: '/_static/photos/private.jpg'
    },
    {
      title: 'Boxing',
      description: [
        'Learn boxing fundamentals like footwork, head movement and combinations.',
        'Experience training  focus mitts, and heavy bag work.'
      ],
      image: '/_static/photos/mitts.jpg'
    }
  ]
  return (
    <section id='training' className='relative mx-auto w-full max-w-full pt-20'>
      <div className='bgTraining'></div>
      <MaxWidthWrapper>
        <HeaderSection label='' title='Training' subtitle='' />
      </MaxWidthWrapper>
      <p className='mx-auto py-6 text-center font-urban text-xl font-thin'>Be a Live Peacefully</p>
      <div className='flex min-h-[600px] flex-col justify-center space-y-4 rounded-lg p-4'>
        <div className='relative grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
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
