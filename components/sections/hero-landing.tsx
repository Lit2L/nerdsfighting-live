import Image from 'next/image'
import Link from 'next/link'

import { env } from '@/env.mjs'
import { siteConfig } from '@/config/site'
import { cn, nFormatter } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/shared/icons'

import { InfiniteSliderVertical } from '../Slider'
import { Badge } from '../ui/badge'

export default async function HeroLanding() {
  const { stargazers_count: stars } = await fetch(
    'https://api.github.com/repos/mickasmt/next-saas-stripe-starter',
    {
      ...(env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }),
      // data will revalidate every hour
      next: { revalidate: 3600 }
    }
  )
    .then((res) => res.json())
    .catch((e) => console.log(e))

  return (
    <section id='hero' className='relative space-y-6 py-12 sm:py-20 lg:py-28'>
      <Image
        src='/mt-bg.png'
        alt='hero'
        layout='fill'
        objectFit='cover'
        className='absolute -z-10 opacity-30'
      />
      <div className='absolute right-0'>
        <InfiniteSliderVertical />
      </div>
      <div className='container flex max-w-5xl flex-col items-center gap-5 text-center'>
        <Badge
          className={cn(
            buttonVariants({ variant: 'outline', size: 'sm', rounded: 'full' }),
            'px-4'
          )}
        >
          <Image alt='logo' src='/logoNF.png' width={100} height={100} className='mr-2 size-3.5' />
          <span className='hidden md:flex'>Kickboxing&nbsp;</span> Martial Arts Training Club{' '}
          <Image alt='logo' src='/logoNF.png' width={100} height={100} className='ml-2 size-3.5' />
        </Badge>

        <h1 className='text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]'>
          Kick off the year with a bang{' '}
          <span className='text-gradient_indigo-purple font-extrabold'>Nerds Fighting</span>
        </h1>

        <p
          className='max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8'
          style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
        >
          {/* Build your next project using Next.js 14, Prisma, Neon, Auth.js v5, Resend, React Email,
          Shadcn/ui, Stripe. */}
        </p>

        <div
          className='flex justify-center space-x-2 md:space-x-4'
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <Link
            href='/pricing'
            prefetch={true}
            className={cn(buttonVariants({ size: 'lg', rounded: 'full' }), 'gap-2')}
          >
            <span>Go Pricing</span>
            <Icons.arrowRight className='size-4' />
          </Link>
          <Link
            href={siteConfig.links.github}
            target='_blank'
            rel='noreferrer'
            className={cn(
              buttonVariants({
                variant: 'outline',
                size: 'lg',
                rounded: 'full'
              }),
              'px-5'
            )}
          >
            <Icons.gitHub className='mr-2 size-4' />
            <p>
              <span className='hidden sm:inline-block'>Star on</span> GitHub{' '}
              <span className='font-semibold'>{nFormatter(stars)}</span>
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}
