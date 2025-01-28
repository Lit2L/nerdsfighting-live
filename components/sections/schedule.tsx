import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { MdSportsMartialArts } from 'react-icons/md'

import { HeaderSection } from '@/components/shared/header-section'
import MaxWidthWrapper from '@/components/shared/max-width-wrapper'

import Card07 from '../card-07'
import { Card, CardTitle } from '../ui/card'
import { Separator } from '../ui/separator'

const classes = [
  {
    id: 1,
    title: 'Monday',
    description: 'Cardio Kickboxing',
    attributes: 'Conditioning, Cardio, Cardio Kickboxing, Heavy Bag, Focus Mitts.',
    schedule: [{ id: 1, day: 'Monday', time: '6:00am - 7:15am' }]
  },

  {
    id: 2,
    title: 'Tuesday',
    description: 'Cardio Kickboxing',
    attributes: 'Conditioning, Cardio, Kickboxing, Heavy Bag, Focus Mitts.',
    schedule: [
      {
        id: 1,
        day: 'Tuesday',
        time: '6:00am - 7:15am'
      }
    ]
  },
  {
    id: 3,
    title: 'Thursday',
    description: 'Cardio Kickboxing',
    attributes: 'Conditioning, Heavy Bag, Focus Mitts.',
    schedule: [
      {
        id: 1,
        day: 'Thursday',
        time: '6:00am - 7:15am'
      }
    ]
  },
  // {
  //   id: 4,
  //   title: 'Friday',
  //   description: 'Friday Fun Kickboxing ',
  //   attributes: 'Muay Thai, Sparring, Technique, Heavy Bag, Mitts & Thai Pads.',
  //   schedule: [{ id: 1, day: 'Friday', time: '6:00am - 7:30am' }]
  // },
  {
    id: 5,
    title: 'Saturday',
    description: 'Sparring, Muay Thai',
    attributes: 'Muay Thai, Sparring, Technique, Heavy Bag, Mitts & Thai Pads.',
    schedule: [{ id: 1, day: 'Saturday', time: '7:00am - 9:30am' }]
  },
  {
    id: 6,
    title: 'Sunday',
    description: 'Muay Thai, Sparring',
    attributes: 'Muay Thai, Sparring, Technique, Heavy Bag, Mitts & Thai Pads.',
    schedule: [{ id: 1, day: 'Sunday', time: '7:00am - 8:30am' }]
  }
]

export function Schedule() {
  return (
    <section id='schedule' className='relative w-full'>
      {/* <Image src='/bg1.png' alt='bg' layout='fill' className='absolute -z-10 opacity-10' /> */}
      <div className='bgSchedule blur-sm' />
      <div className='container py-32 font-genos'>
        <MaxWidthWrapper>
          <HeaderSection label='Nerds Fighting' title='Class Schedule' subtitle='' />

          <div className='mx-12 mt-9 flex flex-wrap justify-center gap-12 p-6'>
            {classes &&
              classes.map((item) => (
                <Card
                  key={item.id}
                  className='relative flex h-52 w-64 flex-col rounded-xl border-zinc-700 p-3 shadow-2xl shadow-neutral-300/70 dark:bg-zinc-800 dark:shadow-neutral-800/70'
                >
                  <CardTitle className='p-1'>
                    <div className='flex items-center justify-between gap-3'>
                      <MdSportsMartialArts className='size-6 text-white' />
                      <h3 className='font-genos uppercase text-[#34f399] dark:text-[#34f399]'>
                        {item.title}
                      </h3>
                    </div>
                  </CardTitle>
                  <Separator className='my-1 bg-emerald-500' />

                  <div className='flex h-full flex-col items-center justify-evenly'>
                    {item.schedule.map((schedule) => (
                      <div
                        key={schedule.id}
                        className='flex w-full flex-col items-center gap-3 rounded-md border border-white/10 bg-black p-3 shadow-xl'
                      >
                        <p className='w-3/16 text-md m-1 flex border-b border-white font-sans text-sm font-semibold capitalize tracking-widest text-neutral-300/90 dark:text-pink-100'>
                          {item.description}
                        </p>

                        <div className='flex items-center'>
                          <Calendar className='w-1/16 mx-2 size-4 text-[#34f399] dark:text-[#34f399]' />
                          <div
                            key={schedule.time}
                            className='flex w-full items-center justify-between py-1'
                          >
                            <span className='w-1/16 text-lg font-bold text-white dark:text-gray-300'>
                              {schedule.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  )
}
