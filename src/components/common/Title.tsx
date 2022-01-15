import styled, { keyframes } from "styled-components"

const gradient = keyframes`
{
  0% { background-position: 0 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0 50%; }
}
`

const Title = styled.h1`
  text-align: center;
  animation: ${gradient} 5s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
  background: var(--fizzy-light-gradient);
  background-size: 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: rgba(0,0,0,0.1);
`

export default Title