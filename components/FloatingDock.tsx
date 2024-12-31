import { IconHome } from '@tabler/icons-react'
import { BsCalendar3 } from 'react-icons/bs'
import { FaSchool } from 'react-icons/fa6'
import { GrScheduleNew } from 'react-icons/gr'
import { MdSportsMartialArts } from 'react-icons/md'

import { FloatingDock } from '@/components/ui/floating-dock'

import { ModeToggle } from './ui/mode-toggle'

export function FloatingNavDock() {
  const links = [
    {
      title: 'Home',
      icon: <IconHome className='text-dark-100 h-full w-full dark:text-neutral-300' />,
      href: '/#'
    },
    // {
    //   title: 'About',
    //   icon: (
    //     <SquareUser className='h-full w-full text-dark-100 dark:text-neutral-300' />
    //   ),
    //   href: '/#about'
    // },
    {
      title: 'Training',
      icon: <MdSportsMartialArts className='text-dark-100 h-full w-full dark:text-neutral-300' />,
      href: '#training'
    },
    {
      title: 'Schedule',
      icon: <BsCalendar3 className='text-dark-100 h-full w-full dark:text-neutral-300' />,
      href: '/#schedule'
    },
    {
      title: 'Appointment',
      icon: <GrScheduleNew className='text-dark-100 h-full w-full dark:text-neutral-300' />,
      href: '/#book'
    },

    {
      title: 'Location',
      icon: <FaSchool className='text-dark-100 h-full w-full dark:text-neutral-300' />,
      href: 'https://www.williamsmma.com/contact.html'
    },

    {
      title: 'Dark',
      icon: <ModeToggle />,
      href: '#'
    }
  ]
  return (
    <div className='fixed bottom-12 flex h-[2rem] w-full items-center justify-center'>
      <FloatingDock
        mobileClassName='translate-y-12 z-40' // only for demo, remove for production
        items={links}
      />
    </div>
  )
}
