import { FC } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-block-start: 1rem;
  margin-block-end: 1rem;
  padding: 0 1rem;
  max-width: 480px;
`

const Display = styled.h2`
  text-align: center;
`

const Button = styled.button`
  background: none;
  color: inherit;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  width: 48px;
  height: 48px;
  font-family: 'Oleo Script', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  color: var(--title-color-intense);
  font-size: 4rem;
  line-height: 1rem;
  color: var(--secondary-color);
  border: 2px solid var(--secondary-color);
  transition: all 150ms ease-out;
  border-radius: var(--small-radius);
  &:hover {
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
  }
`

type ServingsCalculatorType = {
  servings: number
  onClick: Function
}
const ServingsCalculator: FC<ServingsCalculatorType> = ({ servings, onClick }) => {
  return (
    <Container>
      <Button onClick={onClick(false)}>-</Button>
      <Display>{servings} portioner</Display>
      <Button onClick={onClick(true)}>+</Button>
    </Container>
  )
}

export default ServingsCalculator
