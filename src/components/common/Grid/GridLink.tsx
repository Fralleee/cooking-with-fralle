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
  height: 240px;
  width: 300px;
  background: ${props => props.color};
  border-radius: 32px;
  margin-block-start: 1rem;
  margin-block-end: 1rem;
  caret-color: transparent;
  transition: all 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  img {
    display: block;
    width: 100%;
    max-width: 140px;
    margin-top: -3rem;
    height: auto;
  }

  h2 {
    position: absolute;
    bottom: 1rem;
    width: 100%;
    text-align: center;
    color: var(--background-color);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--color);
  }

  border-bottom: 0 solid var(--shadow-color);

  &:hover {
    border-bottom: 6px solid var(--shadow-color);
    transform: translateY(-6px);
  } 

  @media screen and (max-width: ${media.small}) {
    width: 100%;
    margin: 1rem;
  } 
`

type GridLinkType = {
  to: string
  name: string
  image: string
}
const GridLink: FC<GridLinkType> = ({ to, name, image }) => {
  const { data } = usePalette(image, 2, "hex")
  const color = data && data.length > 0 ? data[0] : "#ffffff"
  return (
    <StyledLink to={to} color={color}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </StyledLink>
  )
}

export default GridLink
