'use client'

import { useEffect, useState, useRef } from 'react'
import { Users, MapPin, Award, Smile } from 'lucide-react'

const stats = [
  {
    icon: Users,
    number: 50000,
    suffix: '+',
    label: 'Happy Travelers',
    description: 'Satisfied customers worldwide'
  },
  {
    icon: MapPin,
    number: 250,
    suffix: '+',
    label: 'Destinations',
    description: 'Amazing places to explore'
  },
  {
    icon: Award,
    number: 15,
    suffix: '',
    label: 'Years Experience',
    description: 'In travel industry'
  },
  {
    icon: Smile,
    number: 98,
    suffix: '%',
    label: 'Satisfaction Rate',
    description: 'Customer happiness score'
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
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/90" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent-500/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Thousands
            <span className="block text-accent-400">Around the World</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join our community of adventurers and discover why we're the preferred choice for unforgettable journeys.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 group-hover:bg-white/30 transition-all duration-300 transform group-hover:scale-110">
                  <Icon className="h-10 w-10 text-white" />
                </div>

                {/* Number */}
                <AnimatedCounter 
                  target={stat.number} 
                  suffix={stat.suffix}
                  duration={2000 + index * 200}
                />

                {/* Label */}
                <h3 className="text-xl font-bold text-white mt-2 mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-white/80">
                  {stat.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-6 mx-auto w-16 h-1 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-white/90 mb-6">
              Start your journey today and become part of our amazing travel family.
            </p>
            <button className="btn-secondary">
              Start Your Adventure
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}