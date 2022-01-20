import { FC } from "react"
import styled, { keyframes } from "styled-components"


const scale = keyframes`
{
  0% { transform: scale(1.15); }
  100% { transform: scale(1); }
}
`

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
  animation: ${scale} 200ms var(--easeOutBack);
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
  color: var(--link-color);
  border: 2px solid var(--link-color);
  transition: all 150ms ease-out;
  border-radius: var(--radius-sm);
  &:hover {
    border: 2px solid var(--hover-color);
    color: var(--hover-color);
    transform: scale(1.1);
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
      <Display key={servings}>{servings} portioner</Display>
      <Button onClick={onClick(true)}>+</Button>
    </Container>
  )
}

export default ServingsCalculator
