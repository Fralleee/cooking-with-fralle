import Recipe from "components/Recipe/Recipe"
import Ingredients from "components/Recipe/Ingredients"
import StepByStep from "components/Recipe/StepByStep"
import { getIngredient } from "utils/recipeLogic"
import { useEffect, useState } from "react"
import ServingsCalculator from "components/Recipe/ServingsCalculator"
import allRecipes from "data/recipes"
import { useLocation } from "react-router"
import NoMatch from "./NoMatch"

const RecipeRenderer = () => {
  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined)
  const [servings, setServings] = useState(0)
  const location = useLocation()
  const handleClick = (increase: boolean) => () => setServings(increase ? servings + 2 : servings - 2)

  useEffect(() => {
    const recipe = allRecipes.find(x => x.to === location.pathname)
    if (recipe) {
      document.title = recipe.title
      setRecipe(recipe)
      setServings(recipe.base)
    } else document.title = "Kunde inte hitta recept :("
    return () => {
      document.title = "Cooking with Fralle"
    }
  }, [recipe, location])

  return recipe ? (
    <Recipe title={recipe.title} SVG={recipe.image} titleSwatch={recipe.titleSwatch} imageOffsetY={recipe.imageOffset}>
      <ServingsCalculator servings={servings} onClick={handleClick} />
      {recipe.ingredients.map(ingredientsType => (
        <Ingredients key={ingredientsType.label} title={ingredientsType.label}>
          {ingredientsType.data.map((ingredient, i) => {
            const { amount, label } = getIngredient(ingredient, recipe.base, servings)
            return (
              <li key={i}>
                {amount && <strong>{amount}</strong>} {label}
              </li>
            )
          })}
        </Ingredients>
      ))}
      <StepByStep>
        {recipe.instructions.map((instruction, i) => (
          <li key={i}>{instruction}</li>
        ))}
      </StepByStep>
    </Recipe>
  ) : (
    <NoMatch />
  )
}

export default RecipeRenderer
