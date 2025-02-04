import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users } from "lucide-react"

const recipes = [
  {
    title: "Klasik Türk Kahvesi",
    image:
      "",
    time: "5 dk",
    servings: "2 kişilik",
    difficulty: "Kolay",
  },
  {
    title: "Filtre Kahve",
    image:
      "",
    time: "10 dk",
    servings: "4 kişilik",
    difficulty: "Orta",
  },
  // Daha fazla tarif eklenebilir
]

export function RecipeGrid() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-amber-100 mb-8">En Yeni Tarifler</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe, index) => (
          <Card key={index} className="bg-[#2a1f1f] border-[#3a2f2f] hover:border-amber-700 transition-colors">
            <CardHeader className="p-0">
              <Image
                src={recipe.image || "/placeholder.svg"}
                alt={recipe.title}
                width={400}
                height={300}
                className="rounded-t-lg object-cover h-48 w-full"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg text-amber-100 mb-4">{recipe.title}</CardTitle>
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
        ))}
      </div>
    </section>
  )
}

