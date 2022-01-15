import { FC } from "react"
import styled from "styled-components"

const UnorderedList = styled.ul`
  max-width: 50ch;
  margin: 0 auto;
  margin-block-start: 3rem;
  margin-block-end: 3rem;
  list-style: circle;
`

const Ingredients: FC = ({ children }) => {
  return (
    <UnorderedList>
      {children}
    </UnorderedList>
  )
}

export default Ingredients
