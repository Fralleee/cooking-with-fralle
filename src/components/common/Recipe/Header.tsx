import { FC } from "react"
import styled from "styled-components"
import Title from "components/common/Title"

// #region styled
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 1rem;
`
// #endregion

const Header: FC<RecipeHeaderType> = ({ title, color }) => {
  return (
    <Container>
      <Title color={color} >{title}</Title>
    </Container>
  )
}

export default Header