export type CoffeeBean = {
  id: string
  name: string
  origin: string
  roastLevel: "Light" | "Medium" | "Medium-Dark" | "Dark"
  flavorNotes: string[]
  description: string
  image: string
  altitude: string
  process: string
  characteristics: string[]
}

export type Recipe = {
  id: string
  title: string
  description: string
  image: string
  time: string
  servings: string
  difficulty: "Kolay" | "Orta" | "Zor"
  ingredients: string[]
  steps: string[]
  type: "coffee" | "cocktail"
  tools?: string[]
  characteristics: string[]
}

