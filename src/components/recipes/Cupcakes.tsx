import { cupcake } from "images/items"
import Recipe from "components/common/Recipe/Recipe"
import Ingredients from "components/common/Recipe/Ingredients"
import StepByStep from "components/common/Recipe/StepByStep"
import { getIngredient } from "utils/recipeLogic"
import { useEffect, useState } from "react"
import ServingsCalculator from "components/common/Recipe/ServingsCalculator"

const ingredients: IngredientType[] = [
  { label: "vetemjöl", amount: 213, measurement: "weight" },
  { label: "socker (blanda fritt: farin | muscavado | vanilj)", amount: 150, measurement: "weight" },
  { label: "bakpulver", amount: 10, measurement: "volume" },
  { label: "salt", amount: 5, measurement: "volume" },
  { label: "mjölk", amount: 180, measurement: "volume" },
  { label: "smält smör och olja", amount: 170, measurement: "weight" },
  { label: "ägg", amount: 2, measurement: "pieces" },
  { label: "citronzest" }
]
const base: number = 12

const Cupcakes = () => {
  const [servings, setServings] = useState(base)
  const handleClick = (increase: boolean) => () => setServings(increase ? servings + 2 : servings - 2)

  useEffect(() => {
    document.title = "Muffins"
    return () => {
      document.title = "Cooking with Fralle"
    }
  }, [])

  return (
    <Recipe title="Muffins" SVG={cupcake} titleSwatch="fizzy-light">
      <ServingsCalculator servings={servings} onClick={handleClick} />
      <Ingredients>
        {ingredients.map((ingredient, i) => {
          const { amount, label } = getIngredient(ingredient, base, servings)
          return (
            <li key={i}>
              {amount && <strong>{amount}</strong>} {label}
            </li>
          )
        })}
      </Ingredients>
      <StepByStep>
        <li>Sätt på ugnen på 180 grader.</li>
        <li>Blanda torra ingredienser i en liten skål.</li>
        <li>Blanda våta ingredienser i en större skål.</li>
        <li>Häll i torra till de våta och blanda med slickepott.</li>
        <li>Häll i smeten i formerna.</li>
        <li>Baka i 15-20 minuter. Kolla med tandpetare.</li>
        <li>Låt muffinsen svalna helt innan du äter dem.</li>
      </StepByStep>
    </Recipe>
  )
}

export default Cupcakes
