import EmptyImage from "images/items/empty.svg"
import Recipe from "components/common/Recipe/Recipe"
import styled from "styled-components"

const Information = styled.p`
  text-align: center;
  font-size: 1.5rem;
`

const NoMatch = () => {
  return (
    <Recipe title="Not found" image={EmptyImage} alt="Not found" >
      <Information>Kunde tyvärr inte hitta receptet.</Information>
    </Recipe>
  )
}

export default NoMatch
