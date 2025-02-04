"use client"

import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export function Header() {
  return (
    <motion.header
      className="border-b border-[#2a1f1f] bg-[#1a0f0f]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-amber-500 hover:text-amber-400 transition-colors">
            Kahve Dünyası
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/tarifler" className="text-amber-100 hover:text-amber-400 transition-colors">
              Tarifler
            </Link>
            <Link href="/kahve-cekirdekleri" className="text-amber-100 hover:text-amber-400 transition-colors">
              Kahve Çekirdekleri
            </Link>
          </nav>
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-amber-500" />
            <Input
              type="search"
              placeholder="Tarif ara..."
              className="pl-9 bg-[#2a1f1f] border-[#3a2f2f] text-amber-100 placeholder:text-amber-500/50 focus:border-amber-700 transition-colors"
            />
          </div>
        </div>
      </div>
    </motion.header>
  )
}

