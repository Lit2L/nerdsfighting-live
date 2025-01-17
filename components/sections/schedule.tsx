import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { MdSportsMartialArts } from 'react-icons/md'

import { HeaderSection } from '@/components/shared/header-section'
import MaxWidthWrapper from '@/components/shared/max-width-wrapper'

import { Card, CardTitle } from '../ui/card'
import { Separator } from '../ui/separator'

const classes = [
  // {
  //   id: 1,
  //   title: 'Monday',
  //   description: 'Cardio Kickboxing',
  //   attributes: 'Conditioning, Cardio, Cardio Kickboxing, Heavy Bag, Focus Mitts.',
  //   schedule: [{ id: 1, day: 'Monday', time: '6:00am - 7:15am' }]
  // },

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
  {
    id: 4,
    title: 'Friday',
    description: 'Friday Fun Kickboxing ',
    attributes: 'Muay Thai, Sparring, Technique, Heavy Bag, Mitts & Thai Pads.',
    schedule: [{ id: 1, day: 'Friday', time: '6:00am - 7:30am' }]
  },
  {
    id: 5,
    title: 'Saturday',
    description: 'Sparring, Muay Thai',
    attributes: 'Muay Thai, Sparring, Technique, Heavy Bag, Mitts & Thai Pads.',
    schedule: [{ id: 1, day: 'Saturday', time: '8:00am - 9:30am' }]
  },
  {
    id: 6,
    title: 'Sunday',
    description: 'Sparring, Muay Thai',
    attributes: 'Muay Thai, Sparring, Technique, Heavy Bag, Mitts & Thai Pads.',
    schedule: [{ id: 1, day: 'Sunday', time: '7:00am - 9:30am' }]
  }
]

export function Schedule() {
  return (
    <section id='schedule' className='relative w-full'>
      {/* <Image src='/bg1.png' alt='bg' layout='fill' className='absolute -z-10 opacity-10' /> */}
      <div className='bgSchedule blur-sm' />
      <div className='container bg-[radial-gradient(circle_400px_at_50%_375px,#181818,transparent)] py-32 font-genos dark:bg-[radial-gradient(circle_400px_at_50%_350px,#144437,transparent)]'>
        <MaxWidthWrapper>
          <HeaderSection label='Nerds Fighting' title='Class Schedule' subtitle='' />

          <div className='mx-12 mt-9 flex flex-wrap justify-center gap-12 p-6'>
            {classes &&
              classes.map((item) => (
                <Card
                  key={item.id}
                  className='relative flex h-52 w-64 flex-col rounded-xl border-zinc-700 p-3 shadow-2xl shadow-neutral-300/70 dark:bg-zinc-800 dark:shadow-neutral-800/70'
                >
                  <Image
                    src='/_static/bg15.png'
                    alt='bg'
                    layout='fill'
                    objectFit='cover'
                    className='absolute z-0 opacity-5 blur-[2px]'
                  />
                  <CardTitle className='p-1'>
                    <div className='flex items-center justify-between gap-3'>
                      <MdSportsMartialArts className='size-6 text-white' />
                      <h3 className='font-genos uppercase text-emerald-400 dark:text-green-300'>
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
                        <p className='w-3/16 text-md m-1 flex border-b border-emerald-900 font-genos font-bold capitalize tracking-wide text-neutral-300/90 dark:text-green-500'>
                          {item.description}
                        </p>
                        <div className='flex items-center'>
                          <Calendar className='w-1/16 mx-2 size-4 text-emerald-600 dark:text-emerald-500' />
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
