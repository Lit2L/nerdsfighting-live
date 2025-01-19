'use client'

import { ReactNode, useEffect, useState } from 'react'
import {
  fontHeading,
  fontOrbit,
  fontSans,
  genosFont,
  headingFont,
  logoFont,
  logoFont2
} from '@/assets/fonts'

import { cn } from '@/lib/utils'
import { useTheme } from '@/hooks/use-theme'

import { ThemeProvider } from '../theme-provider'

interface Props {
  children: ReactNode
}

export default function Hydration({ children }: Props) {
  const [isHydrated, setIsHydrated] = useState(false)
  const themeStore = useTheme()
  // Wait until Next.js completed hydration before rendering `children`:
  useEffect(() => setIsHydrated(true), [])
  // If hydration is complete, render `children`. If not render loading status.
  // Ensuring a `children` prop (which may depend on client-side state/library)
  // are only rendered "committed" on the client, preventing hydration errors,
  // once the component has "mounted" using our effect hook, on the client.
  return (
    <>
      {!isHydrated ? (
        <body className='flex h-full w-full items-center justify-center'>
          <code className='bg-base-200 rounded-md px-3 py-2 text-lg'>Loading...</code>
        </body>
      ) : (
        <body
          className={cn(
            'min-h-screen bg-background font-orbitron antialiased',
            fontSans.variable,
            headingFont.variable,
            fontHeading.variable,
            fontOrbit.variable,
            logoFont.variable,
            logoFont2.variable,
            genosFont.variable
          )}
        >
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
            {children}
          </ThemeProvider>
        </body>
      )}
    </>
  )
}
