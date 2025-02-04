"use client"

import { recipes } from "@/data/recipes"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Clock, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function FeaturedRecipes() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const featuredRecipes = recipes.slice(0, 6)

  return (
    <section ref={ref} className="py-16">
      <h2 className="text-3xl font-bold text-amber-100 mb-8">Öne Çıkan Tarifler</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredRecipes.map((recipe, index) => (
          <motion.div
            key={recipe.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/tarifler/${recipe.id}`}>
              <Card className="bg-[#2a1f1f] border-[#3a2f2f] hover:border-amber-700 transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/20 group">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={recipe.image || "/placeholder.svg"}
                      alt={recipe.title}
                      width={400}
                      height={300}
                      className="rounded-t-lg object-cover h-48 w-full transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-amber-100 mb-2 group-hover:text-amber-400 transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-amber-300 text-sm mb-4 line-clamp-2">{recipe.description}</p>
                  <div className="flex items-center space-x-4 text-amber-400 text-sm">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {recipe.time}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {recipe.servings}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

