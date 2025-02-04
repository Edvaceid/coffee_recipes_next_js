"use client"

import { useState } from "react"
import { coffeeBeans } from "@/data/coffee-beans"
import { Card, CardContent } from "@/components/ui/card"
import { FilterButton } from "@/components/ui/filter-button"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"

type RoastLevel = "Light" | "Medium" | "Medium-Dark" | "Dark"
type Characteristic =
  | "Asitli"
  | "Çiçeksi"
  | "Meyvemsi"
  | "Fındıksı"
  | "Çikolatalı"
  | "Dengeli"
  | "Yoğun"
  | "Hafif Gövdeli"
  | "Orta Gövdeli"
  | "Tam Gövdeli"
  | "Yumuşak"
  | "Pürüzsüz"

export default function CoffeeBeansPage() {
  const [selectedRoast, setSelectedRoast] = useState<RoastLevel | "All">("All")
  const [selectedCharacteristic, setSelectedCharacteristic] = useState<Characteristic | "All">("All")

  const roastLevels: RoastLevel[] = ["Light", "Medium", "Medium-Dark", "Dark"]
  const characteristics: Characteristic[] = [
    "Asitli",
    "Çiçeksi",
    "Meyvemsi",
    "Fındıksı",
    "Çikolatalı",
    "Dengeli",
    "Yoğun",
    "Hafif Gövdeli",
    "Orta Gövdeli",
    "Tam Gövdeli",
    "Yumuşak",
    "Pürüzsüz",
  ]

  const filteredBeans = coffeeBeans.filter(
    (bean) =>
      (selectedRoast === "All" || bean.roastLevel === selectedRoast) &&
      (selectedCharacteristic === "All" || bean.characteristics.includes(selectedCharacteristic)),
  )

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-amber-100 mb-8">Kahve Çekirdekleri</h1>

      <div className="flex flex-wrap gap-4 mb-8">
        <div>
          <p className="text-amber-200 mb-2">Kavurma Seviyesi</p>
          <div className="flex flex-wrap gap-2">
            <FilterButton isActive={selectedRoast === "All"} onClick={() => setSelectedRoast("All")}>
              Tümü
            </FilterButton>
            {roastLevels.map((level) => (
              <FilterButton key={level} isActive={selectedRoast === level} onClick={() => setSelectedRoast(level)}>
                {level}
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
          {filteredBeans.map((bean) => (
            <motion.div
              key={bean.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-[#2a1f1f] border-[#3a2f2f] overflow-hidden group h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <Image
                    src={bean.image || "/placeholder.svg"}
                    alt={bean.name}
                    width={400}
                    height={300}
                    className="rounded-t-lg object-cover h-48 w-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-amber-100 mb-2">{bean.name}</h3>
                    <p className="text-amber-300 mb-4">{bean.origin}</p>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-amber-200 mb-2">Kavurma Seviyesi</p>
                        <Badge variant="outline" className="bg-amber-900/30 text-amber-100 border-amber-700">
                          {bean.roastLevel}
                        </Badge>
                      </div>
                      <div>
                        <p className="text-sm text-amber-200 mb-2">Aroma Notları</p>
                        <div className="flex flex-wrap gap-2">
                          {bean.flavorNotes.map((note) => (
                            <Badge
                              key={note}
                              variant="outline"
                              className="bg-amber-900/30 text-amber-100 border-amber-700"
                            >
                              {note}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-amber-200 mb-2">Karakteristikler</p>
                    <div className="flex flex-wrap gap-2">
                      {bean.characteristics.map((char) => (
                        <Badge key={char} variant="outline" className="bg-amber-900/30 text-amber-100 border-amber-700">
                          {char}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

