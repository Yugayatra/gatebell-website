import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics'
import PageViewTracker from './components/PageViewTracker'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'GateBell - Smart Community Management Platform',
    template: '%s | GateBell'
  },
  description: 'Transform your community with GateBell\'s comprehensive security and management solutions. Advanced visitor management, smart access control, and seamless communication tools.',
  keywords: ['community management', 'security', 'visitor management', 'smart access', 'residential security', 'gate management', 'society management', 'India', 'Bangalore'],
  authors: [{ name: 'GateBell Technologies Pvt. Ltd.' }],
  creator: 'GateBell Technologies Pvt. Ltd.',
  publisher: 'GateBell Technologies Pvt. Ltd.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gatebell-website.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gatebell-website.vercel.app',
    title: 'GateBell - Smart Community Management Platform',
    description: 'Transform your community with GateBell\'s comprehensive security and management solutions.',
    siteName: 'GateBell',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'GateBell - Smart Community Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GateBell - Smart Community Management Platform',
    description: 'Transform your community with GateBell\'s comprehensive security and management solutions.',
    images: ['/og-image.svg'],
    creator: '@gatebell',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <PageViewTracker />
        {children}
      </body>
    </html>
  )
} 