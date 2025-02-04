import Link from "next/link"
import { Coffee } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#140a0a] border-t border-[#2a1f1f] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-amber-500 mb-4">
              <Coffee className="h-6 w-6" />
              <span className="text-xl font-bold">Kahve Tarifleri</span>
            </div>
            <p className="text-amber-300">Kahve tutkunları için en lezzetli tarifler ve püf noktaları</p>
          </div>
          <div>
            <h3 className="font-semibold text-amber-100 mb-4">Hızlı Bağlantılar</h3>
            <div className="grid gap-2">
              <Link href="/tarifler" className="text-amber-400 hover:text-amber-300">
                Tüm Tarifler
              </Link>
              <Link href="/teknikler" className="text-amber-400 hover:text-amber-300">
                Demleme Teknikleri
              </Link>
              <Link href="/blog" className="text-amber-400 hover:text-amber-300">
                Blog
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-amber-100 mb-4">İletişim</h3>
            <div className="grid gap-2">
              <Link href="/hakkimizda" className="text-amber-400 hover:text-amber-300">
                Hakkımızda
              </Link>
              <Link href="/iletisim" className="text-amber-400 hover:text-amber-300">
                İletişim
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-[#2a1f1f] mt-8 pt-8 text-center text-amber-400">
          <p>&copy; 2024 Kahve Tarifleri. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

