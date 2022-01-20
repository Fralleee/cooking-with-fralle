import { FC } from "react"
import styled from "styled-components"

// #region styled
const OrderedList = styled.ol`
  max-width: 50ch;
  margin: 0 auto;
  margin-block-start: 3rem;
  margin-block-end: 3rem;
`
// #endregion

const StepByStep: FC = ({ children }) => {
  return (
    <OrderedList>
      {children}
    </OrderedList>
  )
}

export default StepByStep
