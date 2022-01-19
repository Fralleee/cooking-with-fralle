import { drink } from "images/items"
import Recipe from "components/common/Recipe/Recipe"
import Ingredients from "components/common/Recipe/Ingredients"
import StepByStep from "components/common/Recipe/StepByStep"
import { getIngredientString } from "utils/recipeLogic"
import { useState } from "react"
import ServingsCalculator from "components/common/Recipe/ServingsCalculator"

const ingredients: IngredientType[] = [
  { label: "Tequila", amount: 160, measurement: "drinkvolume" },
  { label: "Cointreau", amount: 80, measurement: "drinkvolume" },
  { label: "Agavesirap", amount: 40, measurement: "drinkvolume" },
  { label: "Tonic", amount: 200, measurement: "drinkvolume" },
  { label: "Citron", amount: 2, measurement: "pieces" },
  { label: "Is" }
]
const base: number = 2

const Cupcakes = () => {
  const [servings, setServings] = useState(base)
  const handleClick = (increase: boolean) => () => setServings(increase ? servings + 2 : servings - 2)
  return (
    <Recipe title="Dijon Travolta" SVG={drink} titleSwatch="red" imageOffsetY={-40} >
      <ServingsCalculator servings={servings} onClick={handleClick} />
      <Ingredients>
        {ingredients.map((ingredient, i) => <li key={i}>{getIngredientString(ingredient, base, servings)} </li>)}
      </Ingredients>
      <StepByStep>
        <li>Blanda alla ingredienser utom tonic och is i en shaker.</li>
        <li>Skaka väl ihop med en stor isbit.</li>
        <li>Fyll drinkglas med is och häll i blandningen.</li>
        <li>Toppa med tonic.</li>
      </StepByStep>
    </Recipe>
  )
}

export default Cupcakes
