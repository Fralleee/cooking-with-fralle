import styled from "styled-components"
import { usePalette } from "color-thief-react"
import { FC } from "react"

const StyledImage = styled.img`
  display: block;
  max-width: 400px;
  padding: 0 4rem;
  width: 100%;
  height: auto;
  margin: 3rem auto;
  filter: ${props => `drop-shadow(0 0 32px ${props.color})`};
  user-select: none;
`

type ImageProps = { src: string, alt: string }
const Image: FC<ImageProps> = ({ src, alt }) => {
  const { data } = usePalette(src, 2, "hslArray")
  const colorArray = data && data.length > 0 ? data[0] : [20, 20, 20]
  const color = `hsla(${colorArray[0]}, ${colorArray[1]}%, 40%, .5)`
  return (
    <StyledImage src={src} alt={alt} color={color} />
  )
}


export default Image