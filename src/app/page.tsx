import { HeroSection } from "@/components/hero-section"
import { CoffeeBeanSection } from "@/components/coffee-bean-section"
import { FeaturedRecipes } from "@/components/featured-recipes"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <CoffeeBeanSection />
      <FeaturedRecipes />
    </div>
  )
}

