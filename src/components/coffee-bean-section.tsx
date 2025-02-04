"use client"

import { coffeeBeans } from "@/data/coffee-beans"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function CoffeeBeanSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-16">
      <h2 className="text-3xl font-bold text-amber-100 mb-8">Kahve Çekirdekleri</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coffeeBeans.map((bean, index) => (
          <motion.div
            key={bean.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-[#2a1f1f] border-[#3a2f2f] overflow-hidden group">
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
              <CardContent className="p-6">
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
                        <Badge key={note} variant="outline" className="bg-amber-900/30 text-amber-100 border-amber-700">
                          {note}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

