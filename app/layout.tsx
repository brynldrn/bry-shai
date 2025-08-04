import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import localFont from 'next/font/local'
import './globals.css'

export const metadata: Metadata = {
  title: 'bry + shai wedding',
  description: ''
}

const CabinSketch = localFont({
  src: [
    {
      path: '../public/assets/fonts/CabinSketch-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/CabinSketch-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  preload: true,
  variable: '--font-cabin-sketch',
})

const ProvidenceSans = localFont({
  src: [
    {
      path: '../public/assets/fonts/ProvidenceSans.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/ProvidenceSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  preload: true,
  variable: '--font-cabin-sketch',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --cabin-sketch: ${CabinSketch.style.fontFamily};
  --providence: ${ProvidenceSans.style.fontFamily};
}
        `}</style>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}
