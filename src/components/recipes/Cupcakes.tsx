
import CupcakeImage from "images/items/cupcake.svg"
import Recipe from "components/common/Recipe"
import Title from "components/common/Title"
import Ingredients from "components/common/Ingredients"
import StepByStep from "components/common/StepByStep"
import Image from "components/common/Image"
import { getIngredientString, IngredientType } from "utils/recipeLogic"
import { useState } from "react"
import ServingsCalculator from "components/common/ServingsCalculator"


const base: number = 12
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

const Cupcakes = () => {
  const [servings, setServings] = useState(base)

  const handleClick = (increase: boolean) => () => setServings(increase ? servings + 2 : servings - 2)

  return (
    <Recipe>
      <Title>Muffins</Title>
      <Image src={CupcakeImage} alt="Cupcake" />
      <ServingsCalculator servings={servings} onClick={handleClick} />
      <Ingredients>
        {ingredients.map(ingredient => (
          <li key={ingredient.label}>{getIngredientString(ingredient, base, servings)} </li>
        ))}
      </Ingredients>
      <StepByStep>
        <li>Sätt på ugnen på 180 grader</li>
        <li>Blanda torra ingredienser i en liten skål</li>
        <li>Blanda våta ingredienser i en större skål</li>
        <li>Häll i torra till de våta och blanda med slickepott</li>
        <li>Häll i smeten i formerna</li>
        <li>Baka i 15-20 minuter. Kolla med tandpetare.</li>
        <li>Låt muffinsen svalna helt innan du äter dem.</li>
      </StepByStep>
    </Recipe>
  )
}

export default Cupcakes
