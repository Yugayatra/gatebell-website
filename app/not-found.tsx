'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <div className="mb-8">
          <Link href="/" className="text-3xl font-bold text-primary-600">
            GateBell
          </Link>
        </div>

        {/* 404 Content */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Home className="mr-2" size={20} />
            Go to Homepage
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center w-full border border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">You might also be looking for:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/about" className="text-primary-600 hover:text-primary-700">
              About Us
            </Link>
            <Link href="/contact" className="text-primary-600 hover:text-primary-700">
              Contact
            </Link>
            <Link href="/#features" className="text-primary-600 hover:text-primary-700">
              Features
            </Link>
            <Link href="/#pricing" className="text-primary-600 hover:text-primary-700">
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 