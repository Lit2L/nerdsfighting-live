import { sub } from 'date-fns'

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
      title: 'Train In Flowstate',
      subtitle: 'Find Your Rhythm, Unlock Your Potential',
      description: [
        'Enter a state of complete focus and presence.',
        'Dance into the Mastery of your own movements.',
        'Move with Grace & Fluid Movements that Balance Power and Rhythm.',
        'Experience the after-workout Buzz Mental Peace & Clarity that results from a connecting mind, body and soul.'
      ],
      image: '/_static/photos/privatecoach.png'
    },
    {
      title: 'Training for Real Lives, for Real People',
      // title: 'A Training Style & Philosophy for Everyone people',
      // 'Safe, Modern, Dynamic & Effective Training for Everyone',
      //'Inclusive Environment: Perfect for professionals, students, and parents—train without compromising your work, studies, or family life.',
      //        'Blends modern training methods and sports science with  traditional practices of Muay Thai.'
      // 'Supportive group of martial artists that train together',
      // 'Peak performance training involves calisthenics, drills, strength conditioning, and optional group sparring'
      description: [
        'Safety First: Our training methods are designed to protect the brain and increase health and longevity.',
        'Training for Everyone: The Busy, The Stressed, The Dreamers, The Protectors, The Health & Fitness Seekers.',
        'Not just for Pro Fighters, Our style of training is for the everyday person striving to be their best.',
        'Train with a purpose, pursue a excellence and show up to work or school without head injuries.'
      ],
      image: '/_static/photos/private.jpg'
    },
    // {
    //   title: 'Physical Mastery',
    //   subtitle: 'Build Strength, Endurance, and Agility',
    //   description: [
    //     'Sculpt your body with high-intensity training.',
    //     'Improve coordination and reflexes',
    //     'Enhance cardiovascular health and endurance'
    //   ],
    //   image: '/_static/photos/gauntlet1.png'
    // },
    // {
    //   title: 'Mental Clarity',
    //   subtitle: 'Sharpen Focus and Cultivate Resilience',
    //   description: [
    //     'Improve your focus and concentration.',
    //     'Learn to stay calm under pressure.',
    //     'Build mental discipline through consistent practice.',
    //     'Develop resilience to overcome physical and mental challenges.'
    //   ],
    //   image: '/_static/photos/nerds-handson.png'
    // },
    // {
    //   title: 'Balance & Accessibility',
    //   subtitle:
    //     'Training that fits into your life, whether juggling work, school, family, or other commitments',
    //   description: [
    //     'Release stress and boost confidence.',
    //     'Cultivate self-control and inner peace.',
    //     'Discover the balance between aggression and calmness.',
    //     'ExperienceZen of Aggression and Calmness'
    //   ],
    //   image: '/_static/photos/privatecoach.png'
    // },
    {
      title: 'Emotional Balance',
      subtitle: 'Channel Energy into Growth and Transformation',
      description: [
        'Release stress and boost confidence.',
        'Cultivate self-control and inner peace.',
        'Discover the balance between aggression and calmness.',
        'ExperienceZen of Aggression and Calmness'
      ],
      image: '/_static/photos/privatecoach.png'
    },
    // {
    //   title: 'Spiritual Connection',
    //   subtitle: 'Find Harmony and Purpose in Your Life',
    //   description: [
    //     'Connect with your inner self and the world around you.',
    //     'Discover the power of meditation and mindfulness.',
    //     'Experience the joy of living in the present moment.'
    //   ],
    //   image: '/_static/photos/analysis.png'
    // },
    // {
    //   title: 'Community and Connection',
    //   subtitle: 'Join a Tribe That Inspires Growth',
    //   description: [
    //     'Train with supportive and like-minded individuals.',
    //     'Build meaningful friendships forged through the shared experience created through training.',
    //     'You never forget the people that helped you grow.'
    //   ],
    //   image: '/_static/photos/gauntlet1.png'
    // },
    {
      title: 'Maximize Your Time & Money',
      description: [
        "You aren't learning anything new or challenging.",
        'You arent aquiring new skills or mastering other skills.',
        'Lifting weights and running on a treadmill is boring and ineffective.',
        'Leave your workout stressfree, energized, accomplished and ready to tackle anything.'
      ],
      image: '/_static/photos/nerds-handson.png'
    },
    // {
    //   title: 'Choose Your Path',
    //   description: [
    //     'Fun and Engaging Classes designed to be enjoyable while keeping you motivated and challenged.',
    //     'Live a Healthy Lifestyle and Increase Longevity',
    //     'Test Your Skills and Compete ',
    //     'Look Good, Feel Good, and Be Confident',
    //     'Grow at your own pace'
    //   ],
    //   image: '/_static/photos/nerds-handson.png'
    // },
    {
      title: 'Video Analysis',
      description: [
        'Experienced coach analyzes your technique',
        'Teaches body mechanics and pinpoints areas for improvement',
        'Reinforces proper technique and helps develop better habits.'
      ],
      image: '/_static/photos/analysis.png'
    },
    // {
    //   title: 'Physical Mastery',
    //   subtitle: 'Build Strength, Endurance, and Agility',

    //   description: [
    //     'Supportive group of martial artists that train together',
    //     'Peak performance training involves calisthenics, drills, strength conditioning, and optional group sparring'
    //   ],
    //   image: '/_static/photos/gauntlet1.png'
    // },
    // {
    //   title: 'Kickboxing',
    //   description: [
    //     'Increase Power & Speed in your strikes.',
    //     'Gain a sizable advantage over opponents by learning how to move strategically around your opponents.',
    //     'Off-balance your opponents with rhythm and proper weight shifting in your footwork.',
    //     'Learn how to evade, block, slip against attacks and land effective counter-attacks.'
    //   ],
    //   image: '/_static/photos/private.jpg'
    // },
    {
      title: 'Muay Thai: A Journey of Discovery',
      description: [
        'Where Art Meets Science, Violence Makes Peace, Strategy Becomes Technique, and Dance Meets Discipline',
        'Adding Muay Thai & Martial Arts training to your life will evolve you in ways you never thought possible.'
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
      <p className='font-orbitron mx-auto py-6 text-center text-xl font-thin'>
        Be a Live Peacefully
      </p>
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
