'use client'

import { MapPin, Plane } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LoadingProps {
  variant?: 'default' | 'minimal' | 'page'
  size?: 'sm' | 'md' | 'lg'
  text?: string
  className?: string
}

export function Loading({ 
  variant = 'default', 
  size = 'md', 
  text, 
  className 
}: LoadingProps) {
  if (variant === 'minimal') {
    return (
      <div className={cn('flex items-center justify-center', className)}>
        <div 
          className={cn(
            'animate-spin rounded-full border-2 border-gray-200 border-t-primary-600',
            {
              'h-4 w-4': size === 'sm',
              'h-6 w-6': size === 'md',
              'h-8 w-8': size === 'lg',
            }
          )}
        />
      </div>
    )
  }

  if (variant === 'page') {
    return (
      <div className={cn(
        'fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center',
        className
      )}>
        <div className="text-center">
          {/* Animated Logo */}
          <div className="relative mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce">
              <MapPin className="h-10 w-10 text-white" />
            </div>
            
            {/* Flying Plane */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <Plane className="h-6 w-6 text-primary-600 animate-pulse" />
            </div>
          </div>

          {/* Loading Text */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {text || 'Preparing Your Journey'}
          </h2>
          <p className="text-gray-600 mb-8">
            Please wait while we load amazing destinations for you...
          </p>

          {/* Progress Bar */}
          <div className="w-64 mx-auto bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary-600 to-accent-500 rounded-full animate-pulse" 
                 style={{ width: '60%' }} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn(
      'flex flex-col items-center justify-center p-8 text-center',
      className
    )}>
      {/* Animated Travel Icons */}
      <div className="relative mb-6">
        <div className={cn(
          'bg-gradient-to-br from-primary-600 to-accent-500 rounded-full flex items-center justify-center animate-bounce',
          {
            'w-12 h-12': size === 'sm',
            'w-16 h-16': size === 'md',
            'w-20 h-20': size === 'lg',
          }
        )}>
          <MapPin className={cn(
            'text-white',
            {
              'h-6 w-6': size === 'sm',
              'h-8 w-8': size === 'md',
              'h-10 w-10': size === 'lg',
            }
          )} />
        </div>
        
        {/* Orbiting Elements */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
          <Plane className="absolute -top-2 left-1/2 transform -translate-x-1/2 h-4 w-4 text-primary-600" />
        </div>
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-accent-500 rounded-full" />
        </div>
      </div>

      {/* Loading Text */}
      {text && (
        <p className={cn(
          'text-gray-600 font-medium',
          {
            'text-sm': size === 'sm',
            'text-base': size === 'md',
            'text-lg': size === 'lg',
          }
        )}>
          {text}
        </p>
      )}

      {/* Animated Dots */}
      <div className="flex space-x-1 mt-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cn(
              'bg-primary-600 rounded-full animate-pulse',
              {
                'w-1 h-1': size === 'sm',
                'w-1.5 h-1.5': size === 'md',
                'w-2 h-2': size === 'lg',
              }
            )}
            style={{ 
              animationDelay: `${i * 0.2}s`,
              animationDuration: '1s'
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Skeleton Loading Components
export function DestinationCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
      <div className="h-64 bg-gray-200" />
      <div className="p-6">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-3" />
        <div className="h-3 bg-gray-200 rounded w-1/2 mb-4" />
        <div className="space-y-2 mb-4">
          <div className="h-3 bg-gray-200 rounded w-full" />
          <div className="h-3 bg-gray-200 rounded w-2/3" />
        </div>
        <div className="flex justify-between items-center">
          <div className="h-6 bg-gray-200 rounded w-20" />
          <div className="h-10 bg-gray-200 rounded w-24" />
        </div>
      </div>
    </div>
  )
}

export function BlogCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-200" />
      <div className="p-6">
        <div className="h-4 bg-gray-200 rounded w-full mb-3" />
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
        <div className="space-y-2 mb-4">
          <div className="h-3 bg-gray-200 rounded w-full" />
          <div className="h-3 bg-gray-200 rounded w-full" />
          <div className="h-3 bg-gray-200 rounded w-1/2" />
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full" />
          <div>
            <div className="h-3 bg-gray-200 rounded w-20 mb-1" />
            <div className="h-2 bg-gray-200 rounded w-16" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialSkeleton() {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 animate-pulse">
      <div className="text-center">
        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-6" />
        <div className="flex justify-center space-x-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-5 h-5 bg-gray-200 rounded" />
          ))}
        </div>
        <div className="space-y-3 mb-8">
          <div className="h-6 bg-gray-200 rounded w-full" />
          <div className="h-6 bg-gray-200 rounded w-5/6 mx-auto" />
          <div className="h-6 bg-gray-200 rounded w-4/6 mx-auto" />
        </div>
        <div className="flex items-center justify-center space-x-6">
          <div className="w-20 h-20 bg-gray-200 rounded-full" />
          <div>
            <div className="h-4 bg-gray-200 rounded w-32 mb-2" />
            <div className="h-3 bg-gray-200 rounded w-24" />
          </div>
        </div>
      </div>
    </div>
  )
}