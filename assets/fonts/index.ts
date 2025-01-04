import { Black_Ops_One, Inter as FontSans, Genos as GenosFont, Orbitron } from 'next/font/google'
import localFont from 'next/font/local'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const fontOrbit = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron'
})

export const fontHeading = localFont({
  src: './CalSans-SemiBold.woff2',
  variable: '--font-heading'
})

export const headingFont = Black_Ops_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading'
})

export const logoFont = localFont({
  src: './Northstar3D-4D3x.otf',
  variable: '--font-logo'
})

export const genosFont = GenosFont({
  subsets: ['latin'],
  variable: '--font-genos'
})
