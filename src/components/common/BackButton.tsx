
import { Link } from "react-router-dom"
import media from "styles/media"
import styled from "styled-components"
import { TiArrowBack } from "react-icons/ti"

const StyledLink = styled(Link)`
position: absolute;
z-index: 100;
top: 0;
left: 0;
font-size: 5rem;
transition: all 150ms ease-out;
color: white;

svg {
  stroke-width: 0.15mm;
  stroke: var(--stroke-color);
}

&:hover {
  color: var(--hover-color);
}

@media screen and (max-width: ${media.small}) {
  position: fixed;
  top: auto;
  left: auto;
  bottom: 0;
  right: 0;
  color: var(--link-color);
} 
`

const BackButton = () => (
  <StyledLink to="/"><TiArrowBack /></StyledLink>
)

export default BackButton