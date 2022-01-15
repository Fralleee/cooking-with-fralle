import { FC } from "react"
import styled from "styled-components"

const OrderedList = styled.ol`
  max-width: 50ch;
  margin: 0 auto;
  margin-block-start: 3rem;
  margin-block-end: 3rem;
`

const StepByStep: FC = ({ children }) => {
  return (
    <OrderedList>
      {children}
    </OrderedList>
  )
}

export default StepByStep
