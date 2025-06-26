'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Send,
  Heart,
  ArrowUp,
  Globe,
  Shield,
  Award
} from 'lucide-react'

const footerLinks = {
  destinations: [
    { name: 'Europe Tours', href: '/destinations/europe' },
    { name: 'Asia Adventures', href: '/destinations/asia' },
    { name: 'America Explore', href: '/destinations/america' },
    { name: 'Africa Safari', href: '/destinations/africa' },
    { name: 'Australia & Oceania', href: '/destinations/oceania' },
  ],
  experiences: [
    { name: 'Adventure Sports', href: '/experiences/adventure' },
    { name: 'Cultural Tours', href: '/experiences/culture' },
    { name: 'Wellness Retreats', href: '/experiences/wellness' },
    { name: 'Photography Tours', href: '/experiences/photography' },
    { name: 'Culinary Journeys', href: '/experiences/culinary' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press & Media', href: '/press' },
    { name: 'Partnerships', href: '/partnerships' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Booking FAQ', href: '/faq' },
    { name: 'Travel Insurance', href: '/insurance' },
    { name: 'Terms & Conditions', href: '/terms' },
  ]
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'hover:text-blue-500' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'hover:text-sky-500' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-500' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com', color: 'hover:text-red-500' },
]

const certifications = [
  { name: 'IATA Certified', icon: Shield },
  { name: 'ISO 9001:2015', icon: Award },
  { name: 'Sustainable Tourism', icon: Globe },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Chikmangalore Tourism</h3>
                  <p className="text-sm text-gray-400">Explore the Coffee Land</p>
                </div>
              </Link>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Experience the beauty of Chikmangalore: lush coffee estates, rolling hills, waterfalls, and warm hospitality. Your gateway to Karnataka's hidden gem.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="h-5 w-5 text-primary-500" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="h-5 w-5 text-primary-500" />
                  <span>info@chikmangaloretourism.com</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="h-5 w-5 text-primary-500 mt-0.5" />
                  <span>Chikmangalore, Karnataka, India</span>
                </div>
              </div>

              {/* Certifications */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-gray-300 mb-4">CERTIFICATIONS</h4>
                <div className="space-y-2">
                  {certifications.map((cert) => {
                    const Icon = cert.icon
                    return (
                      <div key={cert.name} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <Icon className="h-4 w-4 text-green-500" />
                        <span>{cert.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Destinations */}
                <div>
                  <h4 className="text-lg font-semibold mb-6 text-white">Destinations</h4>
                  <ul className="space-y-3">
                    {footerLinks.destinations.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {link.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Experiences */}
                <div>
                  <h4 className="text-lg font-semibold mb-6 text-white">Experiences</h4>
                  <ul className="space-y-3">
                    {footerLinks.experiences.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {link.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support */}
                <div>
                  <h4 className="text-lg font-semibold mb-6 text-white">Support</h4>
                  <ul className="space-y-3">
                    {footerLinks.support.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {link.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-12 p-6 bg-gradient-to-r from-primary-600/20 to-accent-500/20 rounded-2xl border border-primary-500/20">
                <h4 className="text-lg font-semibold mb-3 text-white">Stay Updated</h4>
                <p className="text-gray-400 mb-4">Get travel tips and exclusive offers directly in your inbox.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                    <Send className="h-4 w-4" />
                    <span>Subscribe</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* Bottom Section */}
        <div className="container-custom py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-400">
              <p>&copy; {currentYear} Chikmangalore Tourism. All rights reserved.</p>
              <div className="hidden sm:block w-px h-4 bg-gray-600" />
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                <span>for Chikmangalore lovers</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                    aria-label={social.name}
                  >
                    <Icon className="h-6 w-6" />
                  </Link>
                )
              })}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-primary-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      </div>
    </footer>
  )
}