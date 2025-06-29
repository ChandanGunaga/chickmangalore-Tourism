'use client'

import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { Users, MapPin, Award, Smile, Star, Globe, Heart } from 'lucide-react'
import { chikmangaloreImages } from '@/lib/image-config'

const stats = [
  {
    icon: Users,
    number: 50000,
    suffix: '+',
    label: 'Happy Travelers',
    description: 'Satisfied customers worldwide',
    color: 'from-blue-400 to-cyan-400'
  },
  {
    icon: MapPin,
    number: 250,
    suffix: '+',
    label: 'Destinations',
    description: 'Amazing places to explore',
    color: 'from-green-400 to-emerald-400'
  },
  {
    icon: Award,
    number: 15,
    suffix: '',
    label: 'Years Experience',
    description: 'In travel industry',
    color: 'from-yellow-400 to-orange-400'
  },
  {
    icon: Smile,
    number: 98,
    suffix: '%',
    label: 'Satisfaction Rate',
    description: 'Customer happiness score',
    color: 'from-pink-400 to-rose-400'
  }
]

function AnimatedCounter({ 
  target, 
  suffix = '', 
  duration = 2000 
}: { 
  target: number
  suffix?: string
  duration?: number 
}) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(target * easeOut)
      
      setCount(currentCount)
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, target, duration])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section id="stats" className="relative py-24 overflow-hidden">
      {/* Enhanced Background with new image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${chikmangaloreImages.mullayanagiri})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/80 to-accent-900/75" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full animate-float blur-sm" />
        <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full animate-float blur-sm" style={{ animationDelay: '0.5s' }} />
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container-custom">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/30">
            <Globe className="h-4 w-4" />
            <span>Global Recognition</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Trusted by Thousands
            <span className="block bg-gradient-to-r from-accent-400 via-yellow-400 to-accent-500 bg-clip-text text-transparent animate-gradient">
              Around the World
            </span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join our community of adventurers and discover why we're the preferred choice 
            for unforgettable journeys across the globe.
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
            <div className="flex items-center space-x-2 text-white/80">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="w-px h-6 bg-white/30" />
            <div className="flex items-center space-x-2 text-white/80">
              <Heart className="h-5 w-5 text-red-400 fill-red-400" />
              <span className="font-semibold">98% Satisfaction</span>
            </div>
            <div className="w-px h-6 bg-white/30" />
            <div className="flex items-center space-x-2 text-white/80">
              <Award className="h-5 w-5 text-blue-400" />
              <span className="font-semibold">Award Winning</span>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center group relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Enhanced Icon Container */}
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-md rounded-3xl mb-8 group-hover:from-white/35 group-hover:to-white/25 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 border border-white/20 animate-pulse-glow">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Enhanced Number */}
                <div className="mb-4">
                  <AnimatedCounter 
                    target={stat.number} 
                    suffix={stat.suffix}
                    duration={2000 + index * 200}
                  />
                </div>

                {/* Enhanced Label */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-300 transition-colors duration-300">
                  {stat.label}
                </h3>

                {/* Enhanced Description */}
                <p className="text-white/80 text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Enhanced Decorative Line */}
                <div className="mt-6 mx-auto w-20 h-1 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            )
          })}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center">
          <div className="glass rounded-3xl p-10 max-w-3xl mx-auto border border-white/20 shadow-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-white/90 mb-8 text-lg leading-relaxed">
              Start your journey today and become part of our amazing travel family. 
              Let's create unforgettable memories together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary text-lg px-8 py-4">
                Start Your Adventure
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 transform hover:scale-105 text-lg">
                View Testimonials
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}