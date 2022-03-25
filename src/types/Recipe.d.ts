type Recipe = {
  title: string
  to: string
  image: SVGImage
  base: number
  keywords: string[]
  imageOffset: number
  titleSwatch: string
  ingredients: {
    label: string
    data: IngredientType[]
  }[]
  instructions: string[]
}
