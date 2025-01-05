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
      title: 'Flow State',
      subtitle: 'Find Your Rhythm, Unlock Your Potential',
      description: [
        'Learn to be present.',
        'Martial Arts is about learning how to express yourself through your movement.',
        'Move with Balance, Power and Rhythm.'

        // 'Experience the after-workout Buzz Mental Peace & Clarity that results from a connecting mind, body and soul.'
      ],
      image: '/_static/photos/privatecoach.png'
    },
    {
      title: 'Designed For You',
      // Forged in Repetition/Cemented in Repetition/Consistency is Key/Repetition is the Mother of Skill/Repetition is the Father of Learning/
      // title: 'A Training Style & Philosophy for Everyone people',
      // 'Safe, Modern, Dynamic & Effective Training for Everyone',
      //'Inclusive Environment: Perfect for professionals, students, and parents—train without compromising your work, studies, or family life.',
      //        'Blends modern training methods and sports science with  traditional practices of Muay Thai.'
      // 'Supportive group of martial artists that train together',
      // 'Peak performance training involves calisthenics, drills, strength conditioning, and optional group sparring'
      description: [
        // 'Our philosophy is to give our students the type of training that will give them the confidence to tackle whatever comes their way.',
        // 'When you show up for training of your own will, you are building a habit of discipline that will carry over into other areas of your life.',
        // 'Blends modern training methods and sports science with  traditional practices of Muay Thai.',
        // 'Training for Everyone: The Busy, The Stressed, The Dreamers, The Protectors, The Health & Fitness Seekers.',
        //'Martial Arts should increase your health and longevity, not compromise it.',
        //'Designed Training that protects your brain cells and ability to think.',
        // 'Train like a fighter and Release that built-up stress, tension and anxiety.',
        // 'Become an example of a modern day warrior without compromising your work, studies, or family life.',
        // 'Get Fit, Get Strong, Look Good & Feel Fresh.',
        'Created for All walks of Life.',
        'Designed to be accessible to working professionals, students or parents.',
        'Get fit, look good & exercise your mind while having some serious fun.'
      ],
      image: '/_static/photos/nerds-team.jpeg'
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
      title: 'Find Balance',
      subtitle: 'Channel Energy into Growth and Transformation',
      description: [
        'Balance your body, mind, and spirit.',
        'Release stresses and anxieties held inside and leave feeling light and ready for everything.',
        // 'Cultivate self-control through practice and discipline.',
        // 'Discover the balance between aggression and calmness.',
        'Leave workouts feeling zen.'
      ],
      image: '/_static/photos/111111.png'
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
    {
      title: 'Our Way',
      subtitle: 'Join a Tribe That Inspires Growth',
      description: [
        'Join a team of like-minded people who support and encourage each other.',
        `Learn to be a good teammate, Be part of a strong family.`
        // 'You never forget the people you grow with.'
      ],
      image: '/_static/photos/gauntlet1.png'
    },
    // {
    //   title: 'Maximize Your Time & Money',
    //   description: [
    //     "You aren't learning anything new or challenging.",
    //     'You arent aquiring new skills or mastering other skills.',
    //     'Lifting weights and running on a treadmill is boring and ineffective.',
    //     'Leave your workout stressfree, energized, accomplished and ready to tackle anything.'
    //   ],
    //   image: '/_static/photos/nerds-handson.png'
    // },
    {
      title: 'Be Different',
      description: [
        'Less than 1% of the population trains in martial arts.',
        'Even fewer train in Muay Thai.',
        'Equip yourself with skill set that sets you apart.'
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
    }
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
    //   title: 'Some Journeys Redefine the Traveler',
    //   description: [
    //     'Adding Muay Thai Training to your lifestyle is an evolutional journey where you will be continuously updating your software.',
    //     'You may inevitably notice changes in how you look, think, feel, speak and carry yourself.'
    //     // 'Muay Thai & Martial Arts  to your life will evolve you in ways you never thought possible.'
    //     //  how stand , think, feel and how you speak.',
    //     // 'Where Art Meets Science, Violence Makes Peace, Strategy Becomes Technique, and Dance Meets Discipline',
    //   ],
    //   image: '/_static/photos/mitts.jpg'
    // }
  ]
  return (
    <section id='training' className='relative mx-auto w-full max-w-full pt-20'>
      <div className='bgTraining'></div>
      <MaxWidthWrapper>
        <HeaderSection label='' title='Training' subtitle='' />
      </MaxWidthWrapper>
      <p className='mx-auto py-6 text-center font-orbitron text-xl font-thin tracking-widest'>
        Have Fun & Be Safe
        <br />
        {/* <span className='text-sm'>
          If you want to live in peace, then you evil something to be worried about.
        </span> */}
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
