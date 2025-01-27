import { Briefcase, FileText, Home, User } from 'lucide-react'

import { NavBarDemo } from '@/components/ui/float-nav'
import { NavMobile } from '@/components/layout/mobile-nav'
import { NavBar } from '@/components/layout/navbar'
import { SiteFooter } from '@/components/layout/site-footer'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className='relative flex min-h-screen w-full flex-col'>
      <NavMobile />
      <NavBar scroll={true} />

      <main className='flex-1'>{children}</main>

      <SiteFooter />
    </div>
  )
}
