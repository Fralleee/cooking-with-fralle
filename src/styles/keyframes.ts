import { keyframes } from "styled-components"

export const gradient = keyframes`
{
  0% { background-position: 0 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0 50%; }
}
`

export const animateUp = keyframes`
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

export const scale = keyframes`
{
  0% { transform: scale(1.15); }
  100% { transform: scale(1); }
}
`
