import { FC } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import media from "styles/media"
import { usePalette } from "color-thief-react"

const StyledLink = styled(Link)`
  box-sizing: content-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 250px;
  background: ${props => props.color};
  border-radius: 32px;
  margin: 1rem;
  caret-color: transparent;
  transition: 
    box-shadow 250ms cubic-bezier(0.175, 0.885, 0.405, 1.570),
    transform 250ms cubic-bezier(0.175, 0.885, 0.405, 1.570);

  svg {
    display: block;
    width: 100%;
    max-width: 140px;
    margin-top: -3rem;
    height: auto;
    stroke-width: 0.1mm;
    stroke: rgba(0,0,0, .5);
  }

  h2 {
    position: absolute;
    bottom: 1rem;
    width: 100%;
    text-align: center;
    color: var(--background-color);
    -webkit-text-stroke-width: 1.25px;
    -webkit-text-stroke-color: rgb(96,96,96);
    z-index: 1;
    font-size: 2.2rem;
  }

  &:hover {
    box-shadow: 4px 6px 0 3px rgba(0,0,0,.05);
    transform: rotate(5deg) scale(1.05);
  } 

  @media screen and (max-width: ${media.small}) {
    width: 100%;
    margin: 1rem;    
    &:hover {
      box-shadow: none;
      transform: none;
    } 
  } 
`

type GridLinkType = {
  to: string
  name: string
  SVG: SVGImage
}
const GridLink: FC<GridLinkType> = ({ to, name, SVG }) => {
  const { data } = usePalette(SVG.url, 2, "hex")
  const color = data && data.length > 0 ? data[0] : "#ffffff"
  return (
    <StyledLink to={to} color={color} onClick={() => document.body.style.backgroundColor = color}>
      <SVG.Image />
      <h2>{name}</h2>
    </StyledLink>
  )
}

export default GridLink
