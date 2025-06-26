import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturedDestinations } from '@/components/sections/FeaturedDestinations'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { BlogSection } from '@/components/sections/BlogSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { NewsletterSection } from '@/components/sections/NewsletterSection'
import { StatsSection } from '@/components/sections/StatsSection'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <StatsSection />
      <FeaturedDestinations />
      <ExperienceSection />
      <GallerySection />
      <BlogSection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  )
}