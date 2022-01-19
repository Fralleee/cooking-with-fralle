import { dressing } from "images/items"
import Recipe from "components/common/Recipe/Recipe"
import Ingredients from "components/common/Recipe/Ingredients"
import StepByStep from "components/common/Recipe/StepByStep"
import { getIngredientString } from "utils/recipeLogic"
import { useState } from "react"
import ServingsCalculator from "components/common/Recipe/ServingsCalculator"

const ingredients: IngredientType[] = [
  { label: "Olja", amount: 15, measurement: "volume" },
  { label: "Majonnäs", amount: 15, measurement: "volume" },
  { label: "Senap", amount: 30, measurement: "volume" },
  { label: "Vinäger", amount: 30, measurement: "volume" },
  { label: "Knorr vitlöksdressing/grekisk dressing", amount: 1, measurement: "pieces" },
  { label: "Svartpeppar" }
]
const base: number = 2

const Cupcakes = () => {
  const [servings, setServings] = useState(base)
  const handleClick = (increase: boolean) => () => setServings(increase ? servings + 2 : servings - 2)
  return (
    <Recipe title="Salladsdressing" SVG={dressing} titleSwatch="red" imageOffsetY={-40} >
      <ServingsCalculator servings={servings} onClick={handleClick} />
      <Ingredients>
        {ingredients.map((ingredient, i) => <li key={i}>{getIngredientString(ingredient, base, servings)} </li>)}
      </Ingredients>
      <StepByStep>
        <li>Blanda ihop alla ingredienser och rör om väl.</li>
        <li>Låta gärna stå 30-60 minuter.</li>
      </StepByStep>
    </Recipe>
  )
}

export default Cupcakes
