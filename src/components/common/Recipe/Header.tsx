import { FC } from "react"
import styled from "styled-components"
import TitleText from "components/common/Title"

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
      <TitleText color={color} >{title}</TitleText>
    </Container>
  )
}

export default Header