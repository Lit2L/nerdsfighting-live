import '@/styles/globals.css'

import { fontHeading, fontOrbit, fontSans, genosFont, headingFont, logoFont } from '@/assets/fonts'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'

import { cn, constructMetadata } from '@/lib/utils'
import { Toaster } from '@/components/ui/sonner'
import { Tooltip, TooltipProvider } from '@/components/ui/tooltip'
import { Analytics } from '@/components/analytics'
import ModalProvider from '@/components/modals/providers'
import Hydration from '@/components/products/Hydration'
import { TailwindIndicator } from '@/components/tailwind-indicator'

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = constructMetadata()

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <Hydration>
        <SessionProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider delayDuration={0}>
              <ModalProvider>{children}</ModalProvider>
            </TooltipProvider>
            <Analytics />
            <Toaster richColors closeButton />
            <TailwindIndicator />
          </ThemeProvider>
        </SessionProvider>
      </Hydration>
    </html>
  )
}
