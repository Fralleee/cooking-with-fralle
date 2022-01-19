import { mudcake } from "images/items"
import Recipe from "components/common/Recipe/Recipe"
import Ingredients from "components/common/Recipe/Ingredients"
import StepByStep from "components/common/Recipe/StepByStep"
import { getIngredientString } from "utils/recipeLogic"
import { useState } from "react"
import ServingsCalculator from "components/common/Recipe/ServingsCalculator"

const ingredients: IngredientType[] = [
  { label: "Smör", amount: 150, measurement: "weight" },
  { label: "Ägg", amount: 3, measurement: "pieces" },
  { label: "Strösocker", amount: 250, measurement: "volume" },
  { label: "Kakao", amount: 150, measurement: "volume" },
  { label: "Vetemjöl", amount: 250, measurement: "volume" },
  { label: "Ljus sirap", amount: 100, measurement: "volume" },
  { label: "Vaniljpulver", amount: 10, measurement: "volume" },
  { label: "Starkt kaffe", amount: 30, measurement: "volume" },
  { label: "Salt", amount: 2.5, measurement: "volume" }
]
const base: number = 8

const Cupcakes = () => {
  const [servings, setServings] = useState(base)
  const handleClick = (increase: boolean) => () => setServings(increase ? servings + 2 : servings - 2)
  return (
    <Recipe title="Kladdkaka" SVG={mudcake} titleSwatch="midnight" imageOffsetY={80}>
      <ServingsCalculator servings={servings} onClick={handleClick} />
      <Ingredients>
        {ingredients.map((ingredient, i) => <li key={i}>{getIngredientString(ingredient, base, servings)} </li>)}
      </Ingredients>
      <StepByStep>
        <li>Sätt på ugnen på 180 grader.</li>
        <li>Blanda torra ingredienser i en liten skål.</li>
        <li>Blanda våta ingredienser i en större skål.</li>
        <li>Häll i torra till de våta och blanda med slickepott.</li>
        <li>Häll i smeten i formen.</li>
        <li>Grädda i ca 15-20 minuter.</li>
      </StepByStep>
    </Recipe>
  )
}

export default Cupcakes
