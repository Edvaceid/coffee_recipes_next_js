"use client"

import { useState } from "react"
import { recipes } from "@/data/recipes"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { FilterButton } from "@/components/ui/filter-button"
import Image from "next/image"
import Link from "next/link"
import { Clock, Users } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type RecipeType = "coffee" | "cocktail"
type Characteristic =
  | "Sıcak"
  | "Soğuk"
  | "Tatlı"
  | "Acı"
  | "Sade"
  | "Sütlü"
  | "Köpüklü"
  | "Köpüksüz"
  | "Kremamsı"
  | "Yoğun"
  | "Alkollü"
  | "Ferahlatıcı"
  | "Aromatik"
  | "Çikolatalı"

export default function RecipesPage() {
  const [selectedType, setSelectedType] = useState<RecipeType | "All">("All")
  const [selectedCharacteristic, setSelectedCharacteristic] = useState<Characteristic | "All">("All")

  const recipeTypes: RecipeType[] = ["coffee", "cocktail"]
  const characteristics: Characteristic[] = [
    "Sıcak",
    "Soğuk",
    "Tatlı",
    "Acı",
    "Sade",
    "Sütlü",
    "Köpüklü",
    "Köpüksüz",
    "Kremamsı",
    "Yoğun",
    "Alkollü",
    "Ferahlatıcı",
    "Aromatik",
    "Çikolatalı",
  ]

  const filteredRecipes = recipes.filter(
    (recipe) =>
      (selectedType === "All" || recipe.type === selectedType) &&
      (selectedCharacteristic === "All" || recipe.characteristics.includes(selectedCharacteristic)),
  )

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-amber-100 mb-8">Tarifler</h1>

      <div className="flex flex-wrap gap-4 mb-8">
        <div>
          <p className="text-amber-200 mb-2">Tür</p>
          <div className="flex flex-wrap gap-2">
            <FilterButton isActive={selectedType === "All"} onClick={() => setSelectedType("All")}>
              Tümü
            </FilterButton>
            {recipeTypes.map((type) => (
              <FilterButton key={type} isActive={selectedType === type} onClick={() => setSelectedType(type)}>
                {type === "coffee" ? "Kahve" : "Kokteyl"}
              </FilterButton>
            ))}
          </div>
        </div>
        <div>
          <p className="text-amber-200 mb-2">Özellikler</p>
          <div className="flex flex-wrap gap-2">
            <FilterButton isActive={selectedCharacteristic === "All"} onClick={() => setSelectedCharacteristic("All")}>
              Tümü
            </FilterButton>
            {characteristics.map((char) => (
              <FilterButton
                key={char}
                isActive={selectedCharacteristic === char}
                onClick={() => setSelectedCharacteristic(char)}
              >
                {char}
              </FilterButton>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
          {filteredRecipes.map((recipe) => (
            <motion.div
              key={recipe.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href={`/tarifler/${recipe.id}`}>
                <Card className="bg-[#2a1f1f] border-[#3a2f2f] hover:border-amber-700 transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/20 group h-full flex flex-col">
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
                  <CardContent className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-amber-100 mb-2 group-hover:text-amber-400 transition-colors">
                        {recipe.title}
                      </h3>
                      <p className="text-amber-300 text-sm mb-4 line-clamp-2">{recipe.description}</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-amber-400 text-sm mb-2">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {recipe.time}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {recipe.servings}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {recipe.characteristics.map((char) => (
                          <span key={char} className="text-xs bg-amber-900/30 text-amber-100 px-2 py-1 rounded-full">
                            {char}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

