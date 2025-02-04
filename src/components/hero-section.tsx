"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-amber-100 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Kahve Tutkunları İçin Lezzetli Tarifler
      </motion.h1>
      <motion.p
        className="text-xl text-amber-300 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Evinizde profesyonel baristalar gibi kahve hazırlamanın tüm sırları burada. Hem klasik hem modern tarifleri
        keşfedin.
      </motion.p>
    </section>
  )
}

