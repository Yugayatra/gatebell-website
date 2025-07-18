'use client'

import { useState } from 'react'
import { Menu, X, Shield, Users, Home, Smartphone, Star, CheckCircle, ArrowRight, Play, Award, Globe, Heart, Target, Zap, Users2, Building, Lock, Bell } from 'lucide-react'

export default function AboutPage() {
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
                <a href="/#features" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">Features</a>
                <a href="/#solutions" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">Solutions</a>
                <a href="/#pricing" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">Pricing</a>
                <a href="/about" className="text-primary-600 px-3 py-2 text-sm font-medium">About</a>
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
              <a href="/#features" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">Features</a>
              <a href="/#solutions" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">Solutions</a>
              <a href="/#pricing" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">Pricing</a>
              <a href="/about" className="text-primary-600 block px-3 py-2 text-base font-medium">About</a>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            About <span className="text-primary-600">GateBell</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to transform how communities manage security, visitors, and communication. 
            GateBell is more than just a platform – it's a revolution in community living.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To create safer, more connected communities through innovative technology that puts people first. 
                We believe every community deserves world-class security and seamless communication.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2020, GateBell has grown from a simple idea to serve over 10,000 communities across India, 
                helping millions of residents feel safer and more connected to their neighbors.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">10,000+</div>
                  <div className="text-sm text-gray-600">Communities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">2M+</div>
                  <div className="text-sm text-gray-600">Residents</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">50+</div>
                  <div className="text-sm text-gray-600">Cities</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Target className="w-8 h-8 text-primary-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Our Vision</h3>
                      <p className="text-gray-600">To be the most trusted name in community security and management across India.</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="w-8 h-8 text-primary-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Our Values</h3>
                      <p className="text-gray-600">Innovation, Security, Community, and Trust drive everything we do.</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-8 h-8 text-primary-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Our Promise</h3>
                      <p className="text-gray-600">24/7 support and continuous innovation to keep communities safe.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to India's leading community management platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: "2020",
                title: "The Beginning",
                description: "GateBell was founded by a team of security experts and technology enthusiasts who saw the need for better community management solutions."
              },
              {
                year: "2021",
                title: "First 1000 Communities",
                description: "We reached our first major milestone, serving 1000 communities across major Indian cities with our innovative platform."
              },
              {
                year: "2024",
                title: "Market Leader",
                description: "Today, GateBell serves over 10,000 communities and continues to innovate with AI-powered security features."
              }
            ].map((milestone, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="text-4xl font-bold text-primary-600 mb-4">{milestone.year}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{milestone.title}</h3>
                <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate team behind GateBell's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "CEO & Co-Founder",
                bio: "Former security consultant with 15+ years experience in community safety and technology."
              },
              {
                name: "Priya Sharma",
                role: "CTO & Co-Founder",
                bio: "Tech veteran with expertise in AI and IoT, leading our product innovation."
              },
              {
                name: "Amit Patel",
                role: "Head of Operations",
                bio: "Operations expert ensuring seamless service delivery across all communities."
              },
              {
                name: "Neha Singh",
                role: "Head of Customer Success",
                bio: "Dedicated to ensuring every community gets the support they need."
              },
              {
                name: "Vikram Mehta",
                role: "Head of Security",
                bio: "Security specialist with deep knowledge of community safety protocols."
              },
              {
                name: "Anjali Reddy",
                role: "Head of Marketing",
                bio: "Marketing strategist helping communities discover the GateBell advantage."
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users2 className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Security First",
                description: "We prioritize the safety and security of every community we serve."
              },
              {
                icon: Users,
                title: "Community Focus",
                description: "Building stronger, more connected communities is at our core."
              },
              {
                icon: Zap,
                title: "Innovation",
                description: "Continuously improving our technology to serve communities better."
              },
              {
                icon: Heart,
                title: "Trust",
                description: "Earning and maintaining the trust of our communities through transparency."
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Recognition & Awards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry recognition for our commitment to innovation and community safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                year: "2023",
                award: "Best Security Innovation",
                organization: "India Security Awards",
                description: "Recognized for our AI-powered visitor management system."
              },
              {
                year: "2022",
                award: "Startup of the Year",
                organization: "TechCrunch India",
                description: "Awarded for rapid growth and community impact."
              },
              {
                year: "2021",
                award: "Customer Choice",
                organization: "Community Management Association",
                description: "Highest customer satisfaction rating in the industry."
              }
            ].map((award, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-sm text-primary-600 font-medium mb-2">{award.year}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{award.award}</h3>
                <p className="text-gray-600 font-medium mb-3">{award.organization}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Join the GateBell Community
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Be part of the revolution in community management. Let's build safer, more connected communities together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Contact Our Team
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