import Grid from "components/Grid/Grid"
import GridLink from "components/Grid/GridLink"
import styled from "styled-components"
import TitleText from "components/Title"
import Searchbar from "components/Searchbar"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { fadeOutTransition } from "utils/pageTransitions"
import allRecipes from "data/recipes"

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
            {recipes.map(({ to, title, image }, i) => (
              <GridLink key={title} to={to} name={title} SVG={image} />
            ))}
          </Grid>
        </nav>
      </Wrapper>
    </motion.div>
  )
}

export default Browse
