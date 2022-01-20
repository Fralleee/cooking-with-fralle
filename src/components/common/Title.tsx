import styled from "styled-components"
import { animateUp, gradient } from "styles/keyframes"

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