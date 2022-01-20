import styled, { keyframes } from "styled-components"

const gradient = keyframes`
{
  0% { background-position: 0 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0 50%; }
}
`

const animateUp = keyframes`
{
  0% { 
    opacity: 0; 
    transform: translateY(100px); 
  }
  100% { 
    opacity: 1;
    transform: translateY(0); 
  }
}
`

const Title = styled.h1`
  position: relative;
  width: 100%;
  text-align: center;
  animation: ${gradient} 5s var(--easeInOutQuadratic) infinite, ${animateUp} 600ms 50ms var(--easeOutBack);
  background: ${props => props.color ? `var(--${props.color}-gradient)` : "var(--cozy-gradient)"};
  background-size: 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: rgba(0,0,0,0.3);
  z-index: 1;
  font-size: clamp(1.5rem, calc(6vw + 1.25rem), 12rem); 
`

export default Title