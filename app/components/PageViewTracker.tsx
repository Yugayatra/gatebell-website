'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics'

export default function PageViewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { trackPageView } = useGoogleAnalytics()

  useEffect(() => {
    if (pathname) {
      const url = pathname + searchParams.toString()
      trackPageView(url)
    }
  }, [pathname, searchParams, trackPageView])

  return null
} 