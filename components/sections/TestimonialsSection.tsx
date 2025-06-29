'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react'
import { chikmangaloreImages } from '@/lib/image-config'

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Adventure Enthusiast',
    content: 'The trek to Mullayanagiri Peak was absolutely breathtaking! The views from the top were worth every step. The local guides were knowledgeable and the experience was unforgettable.',
    rating: 5,
    image: chikmangaloreImages.profile1,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Nature Lover',
    content: 'Hebbe Falls is a hidden gem! The cascading water surrounded by lush greenery created a magical atmosphere. Perfect for photography and peaceful meditation.',
    rating: 5,
    image: chikmangaloreImages.profile2,
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Coffee Connoisseur',
    content: 'The coffee plantation tour was an eye-opener. Learning about the coffee-making process while surrounded by aromatic coffee plants was a unique experience.',
    rating: 5,
    image: chikmangaloreImages.profile3,
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    role: 'Cultural Explorer',
    content: 'The ancient temples and spiritual sites in Chikmangalore have a serene energy. The Shri Shankara Matha was particularly peaceful and architecturally stunning.',
    rating: 5,
    image: chikmangaloreImages.profile4,
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Wildlife Photographer',
    content: 'Bhadra Wildlife Sanctuary offered incredible opportunities for wildlife photography. The diverse flora and fauna made every moment exciting and rewarding.',
    rating: 5,
    image: chikmangaloreImages.profile5,
  },
  {
    id: 6,
    name: 'Anjali Desai',
    role: 'Travel Blogger',
    content: 'Chikmangalore exceeded all my expectations! From the misty mountains to the aromatic coffee estates, every experience was authentic and memorable.',
    rating: 5,
    image: chikmangaloreImages.profile6,
  },
]

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
    setIsAutoPlaying(false)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MessageSquare className="h-4 w-4" />
            <span>What Our Travelers Say</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stories from
            <span className="block text-gradient">Happy Travelers</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from thousands of satisfied travelers 
            who have experienced the magic of our curated journeys.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50">
            <div className="text-center">
              {/* Quote Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-6">
                <Quote className="h-8 w-8 text-white" />
              </div>

              {/* Rating */}
              <div className="flex justify-center space-x-1 mb-6">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="relative">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-white shadow-lg"
                  />
                </div>
                
                <div className="text-center md:text-left">
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-6 mb-12">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white/70 backdrop-blur-sm hover:bg-white shadow-lg transition-all duration-300 transform hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          {/* Indicators */}
          <div className="flex space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white/70 backdrop-blur-sm hover:bg-white shadow-lg transition-all duration-300 transform hover:scale-110"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 transition-all duration-300 cursor-pointer ${
                index === currentTestimonial
                  ? 'ring-2 ring-primary-500 transform scale-105'
                  : 'hover:bg-white/70 hover:shadow-xl'
              }`}
              onClick={() => goToTestimonial(index)}
            >
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-4 line-clamp-3">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Create Your Own Story?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of happy travelers and let us craft your perfect adventure. 
              Your dream destination is just a click away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 transform hover:scale-105">
                Start Planning Your Trip
              </button>
              <button className="bg-white text-primary-600 hover:bg-gray-50 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                Read More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}