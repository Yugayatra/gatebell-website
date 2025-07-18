'use client'

import Link from 'next/link'
import { Home, RefreshCw, AlertTriangle } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            {/* Logo */}
            <div className="mb-8">
              <Link href="/" className="text-3xl font-bold text-primary-600">
                GateBell
              </Link>
            </div>

            {/* Error Icon */}
            <div className="mb-6">
              <div className="w-20 h-20 bg-red-100 rounded-full mx-auto flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-red-600" />
              </div>
            </div>

            {/* Error Content */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
              <p className="text-gray-600 mb-4">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
              </p>
              {error.digest && (
                <p className="text-sm text-gray-500">
                  Error ID: {error.digest}
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={reset}
                className="inline-flex items-center justify-center w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <RefreshCw className="mr-2" size={20} />
                Try Again
              </button>
              
              <Link
                href="/"
                className="inline-flex items-center justify-center w-full border border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Home className="mr-2" size={20} />
                Go to Homepage
              </Link>
            </div>

            {/* Contact Support */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">
                Still having issues? Contact our support team:
              </p>
              <div className="flex flex-col space-y-2 text-sm">
                <a href="mailto:support@gatebell.com" className="text-primary-600 hover:text-primary-700">
                  support@gatebell.com
                </a>
                <a href="tel:+918000123458" className="text-primary-600 hover:text-primary-700">
                  +91 8000 123 458 (24/7)
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
} 