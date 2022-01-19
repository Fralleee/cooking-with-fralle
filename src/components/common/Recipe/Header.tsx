import { FC } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { TiArrowBack } from "react-icons/ti"
import media from "styles/media"
import Title from "components/common/Title"

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 1rem;
`

const BackButton = styled(Link)`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  font-size: 5rem;
  transition: all 150ms ease-out;
  color: white;

  svg {
    stroke-width: 0.15mm;
    stroke: rgba(0,0,0,.25);
  }

  &:hover {
    color: var(--primary-color);
  }
  
  @media screen and (max-width: ${media.small}) {
    position: fixed;
    top: auto;
    left: auto;
    bottom: 0;
    right: 0;
    color: var(--secondary-color);
  } 
`

type RecipeHeaderType = {
  title: string
  color?: string
}
const Header: FC<RecipeHeaderType> = ({ title, color }) => {
  return (
    <Container>
      <BackButton to="/" ><TiArrowBack /></BackButton>
      <Title color={color} >{title}</Title>
    </Container>
  )
}

export default Header