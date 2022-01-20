import Grid from "components/common/Grid/Grid"
import GridLink from "components/common/Grid/GridLink"
import { cupcake, pancakes, dressing, mudcake, pie, drink } from "images/items"
import styled from "styled-components"
import Title from "components/common/Title"
import Searchbar from "components/common/Searchbar"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { fadeOutTransition } from "utils/pageTransitions"

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: white;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 75px 1rem;
  background: repeating-linear-gradient(
    90deg,
    #99D2CB,
    #99D2CB 3rem,
    #A9D6D1 3rem,
    #A9D6D1 6rem
  );
`

const bakingKeywords = ["bak", "bakning", "bakat", "fika", "efterätt", "dessert", "götta"]
const drinkKeywords = ["drink", "liquor"]

const allRecipes: RecipeSearchItem[] = [
  { to: "/cupcakes", name: "Muffins", SVG: cupcake, keywords: ["muffins", "cupcakes", ...bakingKeywords] },
  { to: "/pancakes", name: "Pannkakor", SVG: pancakes, keywords: ["pannkakor", "pancakes", ...bakingKeywords] },
  { to: "/salad-dressing", name: "Salladsdressing", SVG: dressing, keywords: ["sallad", "dressing", ...bakingKeywords] },
  { to: "/mudcake", name: "Kladdkaka", SVG: mudcake, keywords: ["kladdkaka", "mudcake", ...bakingKeywords] },
  { to: "/apple-pie", name: "Äppelpaj", SVG: pie, keywords: ["äpple", "äppel", "apple", "paj", "pie", ...bakingKeywords] },
  { to: "/dijon-travolta", name: "Dijon Travolta", SVG: drink, keywords: ["dijon", "travolta", "tequila", "citron", ...drinkKeywords] }
]

const AllRecipes = () => {
  const [filter, setFilter] = useState("")
  const [recipes, setRecipes] = useState(allRecipes)

  useEffect(() => {
    setRecipes(allRecipes.filter(recipe => recipe.keywords.some(keyword => keyword.includes(filter))))
  }, [filter, setRecipes])

  const handleInput = (value: string) => setFilter(value)

  return (
    <motion.div key="Browse" {...fadeOutTransition} onAnimationComplete={() => window.scrollTo(0, 0)}>
      <Wrapper>
        <Container>
          <Title>Recept</Title>
          <Searchbar onChange={handleInput} />
        </Container>
        <nav>
          <Grid>
            {recipes.map(({ keywords, ...rest }, i) => <GridLink key={rest.name} {...rest} />)}
          </Grid>
        </nav>
      </Wrapper>
    </motion.div>
  )
}

export default AllRecipes
