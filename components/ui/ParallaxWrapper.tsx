'use client'

import { useEffect, useState, useRef, ReactNode } from 'react'

interface ParallaxWrapperProps {
  children: ReactNode
  speed?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
  offset?: number
  disabled?: boolean
}

export function ParallaxWrapper({
  children,
  speed = 0.5,
  direction = 'up',
  className = '',
  offset = 0,
  disabled = false
}: ParallaxWrapperProps) {
  const [scrollY, setScrollY] = useState(0)
  const [elementTop, setElementTop] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (disabled) return

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleResize = () => {
      if (elementRef.current) {
        setElementTop(elementRef.current.offsetTop)
      }
    }

    handleResize()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [disabled])

  useEffect(() => {
    if (!elementRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(elementRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  const getTransform = () => {
    if (disabled || !isVisible) return 'none'

    const rate = (scrollY - elementTop + offset) * speed
    
    switch (direction) {
      case 'up':
        return `translateY(${-rate}px)`
      case 'down':
        return `translateY(${rate}px)`
      case 'left':
        return `translateX(${-rate}px)`
      case 'right':
        return `translateX(${rate}px)`
      default:
        return `translateY(${-rate}px)`
    }
  }

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: getTransform(),
        transition: disabled ? 'none' : 'transform 0.1s ease-out',
      }}
    >
      {children}
    </div>
  )
}

// Specialized parallax components
interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  speed?: number
  overlay?: boolean
}

export function ParallaxImage({ 
  src, 
  alt, 
  className = '', 
  speed = 0.3,
  overlay = false 
}: ParallaxImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <ParallaxWrapper speed={speed} className="w-full h-full scale-110">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </ParallaxWrapper>
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      )}
    </div>
  )
}

interface ParallaxTextProps {
  children: ReactNode
  speed?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
  delay?: number
}

export function ParallaxText({ 
  children, 
  speed = 0.2, 
  direction = 'up',
  className = '',
  delay = 0
}: ParallaxTextProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(elementRef.current)

    return () => {
      observer.disconnect()
    }
  }, [delay])

  return (
    <div ref={elementRef} className={className}>
      <ParallaxWrapper speed={speed} direction={direction}>
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          {children}
        </div>
      </ParallaxWrapper>
    </div>
  )
}

// Floating elements with parallax
interface FloatingElementProps {
  children: ReactNode
  speed?: number
  className?: string
  floatAmount?: number
  rotationSpeed?: number
}

export function FloatingElement({
  children,
  speed = 0.3,
  className = '',
  floatAmount = 20,
  rotationSpeed = 0.1
}: FloatingElementProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`transition-transform duration-100 ease-out ${className}`}
      style={{
        transform: `
          translateY(${Math.sin(scrollY * 0.01) * floatAmount + scrollY * speed}px) 
          rotate(${scrollY * rotationSpeed}deg)
        `,
      }}
    >
      {children}
    </div>
  )
}

// 3D Parallax Card
interface Parallax3DCardProps {
  children: ReactNode
  className?: string
  intensity?: number
}

export function Parallax3DCard({ 
  children, 
  className = '',
  intensity = 15
}: Parallax3DCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const x = (e.clientX - centerX) / (rect.width / 2)
    const y = (e.clientY - centerY) / (rect.height / 2)
    
    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      className={`transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: `
          perspective(1000px) 
          rotateY(${mousePosition.x * intensity}deg) 
          rotateX(${-mousePosition.y * intensity}deg)
        `,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}