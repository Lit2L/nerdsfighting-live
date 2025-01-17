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
      title: 'Get the Edge',
      description: [
        'Less than 1% train in Martial Arts.',
        'Carry the amazing benefits of training into your daily life.',
        'True confidence comes from knowing you can handle yourself wherever you are.'
      ],
      image: '/_static/photos/2.png'
    },
    {
      title: 'Find Your Balance',
      description: [
        'Therapeutic & Spiritual Balance.',
        'Best outlet for releasing stress, tension, and anxiety.',
        'Experience the Mental Peace & Clarity after workout.'
      ],
      image: '/_static/photos/111111.png'
    },
    {
      title: 'Find Your Flow State',
      // subtitle: 'Find Your Rhythm, Unlock Your Potential',
      description: [
        'Significantly enhance your focus, precision, reaction times and overall enjoyment.',
        'Enhance your sparring and fighting skills, dynamic movement, and rhthym.',
        'Flow your way into the rhthym and dance of Muay Thai'
        // 'Experience the after-workout Buzz Mental Peace & Clarity that results from a connecting mind, body and soul.'
      ],
      image: '/_static/photos/privatecoach.png'
    },
    // {
    //   title: 'All Skill Levels Welcome',
    //   description: [
    //     'Working professionals, students, parents, or anyone looking for something new.',
    //     'Safe and Controlled Environment.',
    //     'Get fit while having fun learning important life skills.'
    //   ],
    //   image: '/_static/photos/gauntlet1.png'
    // },
    {
      title: 'We Welcome Everyone',
      description: [
        'Working professionals, students, parents, nerds and anyone looking for a challenge.',
        'Safe and Controlled Environment.',
        'Get fit while having fun learning important life skills.'
      ],
      image: '/_static/photos/gauntlet1.png'
    },
    {
      title: 'Fun Group Sessions',
      description: [
        'Work together as a team to achieve your goals.',
        'Learn to hold thai-pads, boxing mitts, and much more.',
        'For people thrive in team environments.'
      ],
      image: '/_static/photos/nerds-team.jpeg'
    },

    {
      title: 'Play Based Learning',
      description: [
        'Play is the highest form of research.',
        'Learn to control your emotions during intense situations.',
        'Allows fighters to explore, experiment, and discover without injury.'
      ],
      image: '/_static/photos/game.png'
    }
  ]

  return (
    <section id='training' className='relative mx-auto w-full max-w-full py-24'>
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
