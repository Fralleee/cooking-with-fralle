import Grid from "components/common/Grid/Grid"
import GridLink from "components/common/Grid/GridLink"
import { cupcake, pancakes, dressing, mudcake, pie, drink } from "images/items"
import styled from "styled-components"
import TitleText from "components/common/Title"
import Searchbar from "components/common/Searchbar"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { fadeOutTransition } from "utils/pageTransitions"

// #region styled
const Wrapper = styled.div`
  min-height: 100vh;
  background-color: white;
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 75px 1rem;
  background-color: var(--header-background);

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--stripes);
    z-index: 0;
  }
`
// #endregion

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

const Browse = () => {
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
          <TitleText subtitle="with Fralle">Cooking</TitleText>
          <Searchbar onChange={handleInput} />
        </Container>
        <nav>
          <Grid>
            {recipes.map(({ keywords, ...rest }, i) => (
              <GridLink key={rest.name} {...rest} />
            ))}
          </Grid>
        </nav>
      </Wrapper>
    </motion.div>
  )
}

export default Browse
