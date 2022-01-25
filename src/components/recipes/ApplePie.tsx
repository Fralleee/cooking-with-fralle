import { pie } from "images/items"
import Recipe from "components/common/Recipe/Recipe"
import Ingredients from "components/common/Recipe/Ingredients"
import StepByStep from "components/common/Recipe/StepByStep"
import { getIngredient } from "utils/recipeLogic"
import { useState } from "react"
import ServingsCalculator from "components/common/Recipe/ServingsCalculator"

const ingredientsFilling: IngredientType[] = [
  { label: "Äpplen", amount: 6, measurement: "pieces" },
  { label: "Strösocker", amount: 75, measurement: "volume" },
  { label: "Farinsocker", amount: 30, measurement: "volume" },
  { label: "Kanel", amount: 15, measurement: "volume" },
  { label: "Kardemumma", amount: 10, measurement: "volume" },
  { label: "Potatismjöl", amount: 60, measurement: "volume" }
]

const ingredientsDough: IngredientType[] = [
  { label: "Smör", amount: 175, measurement: "weight" },
  { label: "Strösocker", amount: 200, measurement: "volume" },
  { label: "Havregryn", amount: 300, measurement: "volume" },
  { label: "Vetemjöl", amount: 150, measurement: "volume" },
  { label: "Bakpulver", amount: 5, measurement: "volume" },
  { label: "Vaniljsocker", amount: 10, measurement: "volume" },
  { label: "Ljus sirap", amount: 50, measurement: "volume" },
  { label: "Salt", amount: 2.5, measurement: "volume" }
]
const base: number = 8

const Cupcakes = () => {
  const [servings, setServings] = useState(base)
  const handleClick = (increase: boolean) => () => setServings(increase ? servings + 2 : servings - 2)
  return (
    <Recipe title="Äppelpaj" SVG={pie} titleSwatch="red" imageOffsetY={40}>
      <ServingsCalculator servings={servings} onClick={handleClick} />
      <Ingredients title="Fyllning">
        {ingredientsFilling.map((ingredient, i) => {
          const { amount, label } = getIngredient(ingredient, base, servings)
          return <li key={i}>{amount && <strong>{amount}</strong>} {label}</li>
        })}
      </Ingredients>
      <Ingredients title="Deg">
        {ingredientsDough.map((ingredient, i) => {
          const { amount, label } = getIngredient(ingredient, base, servings)
          return <li key={i}>{amount && <strong>{amount}</strong>} {label}</li>
        })}
      </Ingredients>
      <StepByStep>
        <li>Sätt ugnen på 175 grader.</li>
        <li>Blanda ihop alla ingredienserna till fyllningen i en bunke och sprid ut i pajformen.</li>
        <li>I en annan bunke blandar du ihop strösocker, salt, havregryn, vetemjöl, bakpulver och vaniljsocker.</li>
        <li>Smält smöret i en kastrull och häll sedan ner det i bunken tillsammans med sirap. </li>
        <li>Rör ihop till en jämn smet och klicka ut den på äppelfyllningen. Bre försiktigt ut i ett jämnt lager över äpplena.</li>
        <li>Grädda pajen i mitten av ugnen i ca 30-40 minuter eller tills den fått en fin gyllenbrun färg och inte längre är glansig.</li>
      </StepByStep>
    </Recipe>
  )
}

export default Cupcakes
