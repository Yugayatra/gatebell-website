'use client'

import { useState } from 'react'
import { Menu, X, Shield, Users, Home, Smartphone, Star, CheckCircle, ArrowRight, Play } from 'lucide-react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-2xl font-bold text-primary-600">GateBell</a>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#features" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">Features</a>
                <a href="#solutions" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">Solutions</a>
                <a href="#pricing" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">Pricing</a>
                <a href="/about" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">About</a>
                <a href="/contact" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">Contact</a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">Login</button>
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <a href="#features" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">Features</a>
              <a href="#solutions" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">Solutions</a>
              <a href="#pricing" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">Pricing</a>
              <a href="/about" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">About</a>
              <a href="/contact" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">Contact</a>
              <div className="pt-4 space-y-2">
                <button className="w-full text-left text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">Login</button>
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-base font-medium transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Community with{' '}
                <span className="text-primary-600">Smart Security</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                GateBell provides comprehensive community management solutions with advanced security features, visitor management, and seamless communication tools.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2" size={20} />
                </button>
                <button className="border border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center">
                  <Play className="mr-2" size={20} />
                  Watch Demo
                </button>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="ml-3 text-sm text-gray-600">Trusted by 10,000+ communities</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Community Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From visitor management to security monitoring, GateBell provides all the tools you need to keep your community safe and connected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Smart Security",
                description: "Advanced access control with facial recognition and mobile app integration for seamless entry management."
              },
              {
                icon: Users,
                title: "Visitor Management",
                description: "Streamlined visitor registration, approval workflows, and real-time notifications for residents."
              },
              {
                icon: Home,
                title: "Community Hub",
                description: "Centralized platform for announcements, maintenance requests, and community discussions."
              },
              {
                icon: Smartphone,
                title: "Mobile App",
                description: "Powerful mobile application for residents to manage access, receive notifications, and stay connected."
              },
              {
                icon: Star,
                title: "Premium Support",
                description: "24/7 customer support with dedicated account managers and comprehensive training programs."
              },
              {
                icon: CheckCircle,
                title: "Easy Integration",
                description: "Seamless integration with existing security systems and property management software."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Community?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of communities that trust GateBell for their security and management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">GateBell</h3>
              <p className="text-gray-400">
                Transforming communities with smart security and management solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GateBell. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 