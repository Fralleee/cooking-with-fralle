import { empty } from "images/items"
import Recipe from "components/common/Recipe/Recipe"
import styled from "styled-components"
import { useEffect } from "react"

// #region styled
const Information = styled.p`
  text-align: center;
  font-size: 1.5rem;
`
// #endregion

const NoMatch = () => {
  useEffect(() => {
    document.title = "Not found"
    return () => {
      document.title = "Cooking with Fralle"
    }
  }, [])

  return (
    <Recipe title="Not found" SVG={empty}>
      <Information>Kunde tyvärr inte hitta receptet.</Information>
    </Recipe>
  )
}

export default NoMatch
