import { pancakes } from "images/items"
import Recipe from "components/common/Recipe/Recipe"
import Ingredients from "components/common/Recipe/Ingredients"
import StepByStep from "components/common/Recipe/StepByStep"
import ServingsCalculator from "components/common/Recipe/ServingsCalculator"
import { useState } from "react"
import { getIngredientString } from "utils/recipeLogic"

const ingredients: IngredientType[] = [
  { label: "ägg", amount: 2, measurement: "pieces" },
  { label: "vetemjöl", amount: 200, measurement: "volume" },
  { label: "mjölk", amount: 200, measurement: "volume" },
  { label: "smält smör", amount: 30, measurement: "volume" },
  { label: "socker", amount: 30, measurement: "volume" },
  { label: "salt", amount: 2, measurement: "volume" }
]
const base: number = 6

const Pancakes = () => {
  const [servings, setServings] = useState(base)
  const handleClick = (increase: boolean) => () => setServings(increase ? servings + 2 : servings - 2)
  return (
    <Recipe title="Pannkakor" SVG={pancakes} imageOffsetY={50} titleSwatch="midnight" >
      <ServingsCalculator servings={servings} onClick={handleClick} />
      <Ingredients>
        {ingredients.map((ingredient, i) => <li key={i}>{getIngredientString(ingredient, base, servings)} </li>)}
      </Ingredients>
      <StepByStep>
        <li>Mix dry ingredients</li>
        <li>Add in melted butter</li>
        <li>Add in eggs</li>
        <li>Slowly whisk in the milk to prevent clumps</li>
        <li>Fry it baby!</li>
      </StepByStep>
    </Recipe>
  )
}

export default Pancakes
