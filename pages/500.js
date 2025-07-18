import Head from 'next/head';
import Link from 'next/link';

export default function Custom500() {
  return (
    <>
      <Head>
        <title>500 - Server Error | GateBell</title>
        <meta name="description" content="We're experiencing technical difficulties. Our team is working to fix this issue. Please try again later." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          {/* Logo */}
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              GateBell
            </Link>
          </div>

          {/* 500 Illustration */}
          <div className="mb-8">
            <div className="relative">
              <div className="w-32 h-32 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">500</span>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Server Error</h1>
            <p className="text-lg text-gray-600 mb-6">
              Oops! Something went wrong on our end. 
              Our team has been notified and is working to fix this issue.
            </p>
          </div>

          {/* Status Information */}
          <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse mr-2"></div>
              <span className="text-sm font-medium text-yellow-800">Issue Detected</span>
            </div>
            <p className="text-sm text-yellow-700">
              We're experiencing technical difficulties. Please try again in a few minutes.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button 
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Try Again
            </button>
            
            <Link 
              href="/"
              className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-blue-600 bg-white border border-blue-300 rounded-lg shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go Home
            </Link>
          </div>

          {/* Help Text */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-2">
              Still having issues? <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">Contact our support team</Link>
            </p>
            <p className="text-xs text-gray-400">
              Error ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 