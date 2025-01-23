'use client'

import { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { useSession } from 'next-auth/react'
import { FiShoppingCart } from 'react-icons/fi'

import { docsConfig } from '@/config/docs'
import { marketingConfig } from '@/config/marketing'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { useScroll } from '@/hooks/use-scroll'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader } from '@/components/ui/sheet'
import { Skeleton } from '@/components/ui/skeleton'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { DocsSearch } from '@/components/docs/search'
import { ModalContext } from '@/components/modals/providers'
import { Icons } from '@/components/shared/icons'
import MaxWidthWrapper from '@/components/shared/max-width-wrapper'
import { ThemeToggle } from '@/components/theme-toggle'

import Logo from '../Logo'

interface NavBarProps {
  scroll?: boolean
  large?: boolean
}

export function NavBar({ scroll = false }: NavBarProps) {
  const scrolled = useScroll(50)
  const { data: session, status } = useSession()
  const { setShowSignInModal } = useContext(ModalContext)

  const handleBlurOut = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }
  const selectedLayout = useSelectedLayoutSegment()
  const documentation = selectedLayout === 'docs'

  const configMap = {
    docs: docsConfig.mainNav
  }

  const links = (selectedLayout && configMap[selectedLayout]) || marketingConfig.mainNav

  return (
    <header
      className={`{ scroll ? (scrolled ? 'border-b' : 'bg-transparent') : 'border-b' } fixed top-0 z-40 flex h-24 w-full items-center justify-center bg-background/60 backdrop-blur-xl transition-all`}
    >
      <MaxWidthWrapper className='flex h-24 items-center justify-between' large={documentation}>
        <div className='flex h-24 items-center justify-center gap-6 md:gap-10'>
          <div className='scale-50'>
            <Link href='/' className='text-center'>
              <Image
                src='/_static/logoNF.png'
                alt='Nerds Fighting'
                width={184}
                height={184}
                priority
              />
            </Link>
          </div>

          {links && links.length > 0 ? (
            <nav className='hidden gap-6 md:flex'>
              {links.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? '#' : item.href}
                  prefetch={true}
                  className={cn(
                    'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                    item.href.startsWith(`/${selectedLayout}`)
                      ? 'text-foreground'
                      : 'text-foreground/60',
                    item.disabled && 'cursor-not-allowed opacity-80'
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>

        <div className='flex items-center space-x-3'>
          {/* right header for docs */}
          {documentation ? (
            <div className='hidden flex-1 items-center space-x-4 sm:justify-end lg:flex'>
              <div className='hidden lg:flex lg:grow-0'>
                <DocsSearch />
              </div>
              <div className='flex lg:hidden'>
                <Icons.search className='size-6 text-muted-foreground' />
              </div>
              <div className='flex space-x-4'>
                <Link href={siteConfig.links.github} target='_blank' rel='noreferrer'>
                  <Icons.gitHub className='size-7' />
                  <span className='sr-only'>GitHub</span>
                </Link>
              </div>
            </div>
          ) : null}

          {session ? (
            <Link
              href={session.user.role === 'ADMIN' ? '/admin' : '/dashboard'}
              className='hidden rounded-sm px-2 md:block'
            >
              <span className='text-gradient_blues font-orbitron text-lg font-medium tracking-wide'>
                {session.user.role === 'ADMIN' ? 'Admin' : 'Dashboard'}
              </span>
            </Link>
          ) : status === 'unauthenticated' ? (
            <Button
              className='mx-3 hidden items-center gap-2 px-5 text-[#4c98ca] md:flex'
              variant='outline'
              size='sm'
              onClick={() => setShowSignInModal(true)}
            >
              <Icons.user className='size-5' />
              <span>Login</span>
            </Button>
          ) : (
            <Skeleton className='hidden h-9 w-28 rounded-full lg:flex' />
          )}
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
