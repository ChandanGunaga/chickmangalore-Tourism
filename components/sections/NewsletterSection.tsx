'use client'

import { useState } from 'react'
import { Mail, Send, Check, Globe, Gift, Bell } from 'lucide-react'

const benefits = [
  {
    icon: Globe,
    title: 'Exclusive Destinations',
    description: 'Be the first to discover new hidden gems and exclusive travel destinations.'
  },
  {
    icon: Gift,
    title: 'Special Offers',
    description: 'Get access to subscriber-only deals and early bird pricing on premium packages.'
  },
  {
    icon: Bell,
    title: 'Travel Alerts',
    description: 'Stay informed about the best travel times, weather updates, and local events.'
  }
]

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubscribed(true)
    setIsLoading(false)
    setEmail('')
  }

  return (
    <section id="newsletter" className="section-padding bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Circles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-float" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-pink-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-blue-400/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Mail className="h-10 w-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Never Miss an
              <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                Adventure
              </span>
            </h2>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Join our community of 25,000+ adventurous travelers and get exclusive access to 
              hidden destinations, special offers, and insider travel tips.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 mb-12">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-6 py-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                      required
                    />
                    <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 min-w-[140px]"
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
                
                <p className="text-white/70 text-sm">
                  ✨ No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </form>
            ) : (
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-6">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Welcome Aboard! 🎉
                </h3>
                <p className="text-white/90 text-lg">
                  Thank you for subscribing! Check your inbox for a special welcome gift.
                </p>
              </div>
            )}
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="text-center group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-white/30 transition-all duration-300 transform group-hover:scale-110">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-white/80">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Social Proof */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">25,000+</p>
                <p className="text-white/70">Happy Subscribers</p>
              </div>
              
              <div className="hidden md:block w-px h-12 bg-white/30" />
              
              <div className="text-center">
                <p className="text-3xl font-bold text-white">4.9★</p>
                <p className="text-white/70">Newsletter Rating</p>
              </div>
              
              <div className="hidden md:block w-px h-12 bg-white/30" />
              
              <div className="text-center">
                <p className="text-3xl font-bold text-white">Weekly</p>
                <p className="text-white/70">Fresh Content</p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 opacity-70">
            <span className="text-white/60 text-sm">Trusted by travelers from:</span>
            <div className="flex items-center space-x-6">
              <span className="text-white/80 font-semibold">🇺🇸 USA</span>
              <span className="text-white/80 font-semibold">🇬🇧 UK</span>
              <span className="text-white/80 font-semibold">🇨🇦 Canada</span>
              <span className="text-white/80 font-semibold">🇦🇺 Australia</span>
              <span className="text-white/80 font-semibold">🇩🇪 Germany</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}