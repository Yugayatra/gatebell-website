import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with GateBell. Contact our team for support, sales inquiries, or to learn more about our community management solutions.',
  openGraph: {
    title: 'Contact GateBell - Get in Touch',
    description: 'Get in touch with GateBell. Contact our team for support, sales inquiries, or to learn more about our community management solutions.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 