import Grid from "components/common/Grid/Grid"
import GridLink from "components/common/Grid/GridLink"
import CupcakeImage from "images/items/cupcake.svg"
import PancakesImage from "images/items/pancakes.svg"
import styled from "styled-components"
import Title from "components/common/Title"
import Searchbar from "components/common/Searchbar"
import { useEffect, useState } from "react"


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  padding-top: 80px;
  background: repeating-linear-gradient(
    90deg,
    #99D2CB,
    #99D2CB 3rem,
    #A9D6D1 3rem,
    #A9D6D1 6rem
  );
`

const bakingKeywords = ["bak", "bakning", "bakat", "fika", "efterätt", "dessert", "götta"]

const allRecipes: RecipeSearchItem[] = [
  { to: "/cupcakes", name: "Muffins", image: CupcakeImage, keywords: ["muffins", "cupcakes", ...bakingKeywords] },
  { to: "/pancakes", name: "Pannkakor", image: PancakesImage, keywords: ["pannkakor", "pancakes", ...bakingKeywords] }
]

const AllRecipes = () => {
  const [filter, setFilter] = useState("")
  const [recipes, setRecipes] = useState(allRecipes)

  useEffect(() => {
    setRecipes(allRecipes.filter(recipe => recipe.keywords.some(keyword => keyword.includes(filter))))
  }, [filter, recipes, setRecipes])

  const handleInput = (value: string) => setFilter(value)

  return (
    <>
      <Container>
        <Title>Recept</Title>
        <Searchbar onChange={handleInput} />
      </Container>
      <nav>
        <Grid>
          {recipes.map(recipe => (
            <GridLink to={recipe.to} name={recipe.name} image={recipe.image} />
          ))}
        </Grid>
      </nav>
    </>
  )
}

export default AllRecipes
