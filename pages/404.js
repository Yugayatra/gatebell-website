import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | GateBell</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to GateBell's secure community management platform." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
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

          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="relative">
              <div className="w-32 h-32 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">404</span>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-6">
              Oops! The page you're looking for seems to have wandered off. 
              Don't worry, we'll help you find your way back.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link 
              href="/"
              className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go Home
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-blue-600 bg-white border border-blue-300 rounded-lg shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Go Back
            </button>
          </div>

          {/* Help Text */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need help? <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">Contact our support team</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 