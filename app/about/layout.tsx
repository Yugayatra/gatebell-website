import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about GateBell\'s mission to transform community management. Discover our story, leadership team, values, and commitment to creating safer, more connected communities.',
  openGraph: {
    title: 'About GateBell - Our Mission & Story',
    description: 'Learn about GateBell\'s mission to transform community management. Discover our story, leadership team, values, and commitment to creating safer, more connected communities.',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 