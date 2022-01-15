import { FC } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { TiArrowBack } from "react-icons/ti"
import media from "styles/media"

const RecipeContainer = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  caret-color: transparent;
`

const BackButton = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 5rem;
  transition: all 150ms ease-out;
  color: var(--secondary-color);
  &:hover {
    color: var(--primary-color);
  }
  
  @media screen and (max-width: ${media.small}) {
    position: fixed;
    top: auto;
    left: auto;
    bottom: 0;
    right: 0;
  } 
`

const Recipe: FC = ({ children }) => (
  <RecipeContainer>
    <BackButton to="/"><TiArrowBack /></BackButton>
    {children}
  </RecipeContainer>
)

export default Recipe