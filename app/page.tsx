import { StatsSection } from '@/components/sections/StatsSection'
import { NewsletterSection } from '@/components/sections/NewsletterSection'
import EnhancedHeroSection from '@/components/sections/HeroSection'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <EnhancedHeroSection /> 
      <StatsSection />
      <NewsletterSection />
    </div>
  )
}