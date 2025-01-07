import { SidebarNavItem, SiteConfig } from 'types'
import { env } from '@/env.mjs'

const site_url = env.NEXT_PUBLIC_APP_URL

export const siteConfig: SiteConfig = {
  name: 'Nerds Fighting',
  description: 'Taking our lunch money back.',
  url: site_url,
  address: '8780 Warner Ave, suite 7, Fountain Valley, CA 92708',
  phone: '714-866-6926',
  email: 'larryl@nerdsfighting.com',
  locationName: 'Williams MMA Academy',
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: 'https://twitter.com/',
    github: 'https://nerdsfighting.com'
  },
  mailSupport: 'larryl@nerdsfighting.com'
}

export const footerLinks: SidebarNavItem[] = [
  {
    title: 'Nerds Fighting Gym',
    items: [
      { title: 'Home', href: '/#' },
      { title: 'Pricing', href: '/pricing' },
      { title: 'Schedule', href: '/schedule' },
      { title: 'Contact', href: '/contact' },
      { title: 'Blog', href: '/#blog' }
      // { title: 'Terms', href: '/terms' },
      // { title: 'Privacy', href: '/privacy' }
    ]
  }
  // {
  //   title: 'Blog',
  //   items: [
  //     { title: 'Security', href: '#' },
  //     { title: 'Customization', href: '#' },
  //     { title: 'Customers', href: '#' },
  //     { title: 'Changelog', href: '#' }
  //   ]
  // },
  // {
  //   title: 'Docs',
  //   items: [
  //     { title: 'Introduction', href: '#' },
  //     { title: 'Installation', href: '#' },
  //     { title: 'Components', href: '#' },
  //     { title: 'Code Blocks', href: '#' }
  //   ]
  // }
]
