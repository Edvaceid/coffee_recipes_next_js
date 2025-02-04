import { recipes } from "@/data/recipes"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Clock, Users, ChefHat, Utensils } from "lucide-react"
import { notFound } from "next/navigation"

export default function RecipePage({ params }: { params: { id: string } }) {
  const recipe = recipes.find((r) => r.id === params.id)

  if (!recipe) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <Image
            src={recipe.image || "/placeholder.svg"}
            alt={recipe.title}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-[400px]"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-amber-100 mb-4">{recipe.title}</h1>
          <p className="text-amber-300 mb-6">{recipe.description}</p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-2 text-amber-200">
              <Clock className="h-5 w-5" />
              <span>{recipe.time}</span>
            </div>
            <div className="flex items-center gap-2 text-amber-200">
              <Users className="h-5 w-5" />
              <span>{recipe.servings}</span>
            </div>
            <div className="flex items-center gap-2 text-amber-200">
              <ChefHat className="h-5 w-5" />
              <span>{recipe.difficulty}</span>
            </div>
          </div>

          {recipe.tools && (
            <Card className="bg-[#2a1f1f] border-[#3a2f2f] mb-6">
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold text-amber-100 mb-3 flex items-center gap-2">
                  <Utensils className="h-5 w-5" />
                  Gerekli Malzemeler
                </h2>
                <ul className="list-disc list-inside text-amber-200 space-y-1">
                  {recipe.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          <Card className="bg-[#2a1f1f] border-[#3a2f2f]">
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold text-amber-100 mb-3">Malzemeler</h2>
              <ul className="list-disc list-inside text-amber-200 space-y-1">
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="bg-[#2a1f1f] border-[#3a2f2f] mt-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-amber-100 mb-4">Hazırlanışı</h2>
          <ol className="space-y-4">
            {recipe.steps.map((step, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-900 text-amber-100 font-semibold shrink-0">
                  {index + 1}
                </span>
                <p className="text-amber-200 pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}

