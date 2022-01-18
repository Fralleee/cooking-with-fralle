import { FC } from "react"
import styled from "styled-components"
import PlateImage from "images/items/plate.svg"
import Header from "./Header"
import { usePalette } from "color-thief-react"

const OuterContainer = styled.div`  
  display: flex; 
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.color};
`

const RecipeContainer = styled.div<ImageType>`
  position: relative;
  max-width: 900px;
  width: 100%;
  flex: 1;
  margin: 0 auto;
  caret-color: transparent;
  background: var(--background-color);
  border-radius: 48px 48px 0 0;
  padding-top: 125px;
  padding-bottom: 4rem;
  margin-top: ${props => 150 - props.imageOffsetY}px;
`

type ImageType = { imageOffsetY: number }
const Image = styled.img<ImageType>`
  position: absolute;
  left: 50%;
  top: -150px;
  transform: translateX(-50%);
  margin-top: ${props => props.imageOffsetY}px;
  max-width: 200px;
  width: 100%;
  user-select: none;
  z-index: 2;
`

const Plate = styled.img`
  position: absolute;
  left: 50%;
  top: -75px;
  transform: translateX(-50%);
  max-width: 400px;
  width: 100%;
  user-select: none;
  z-index: 1;
`


type RecipeType = {
  title: string
  titleSwatch?: string
  image: string
  alt: string
  imageOffsetY?: number
}
const Recipe: FC<RecipeType> = ({ children, title, titleSwatch, image, alt, imageOffsetY = 0 }) => {
  const { data } = usePalette(image, 2, "hex")
  const color = data && data.length > 0 ? data[0] : "#ffffff"
  return (
    <OuterContainer color={color}>
      <Header title={title} color={titleSwatch} />
      <RecipeContainer imageOffsetY={imageOffsetY} >
        <Image src={image} alt={alt} imageOffsetY={imageOffsetY} />
        <Plate src={PlateImage} alt="Plate" />
        {children}
      </RecipeContainer>
    </OuterContainer>
  )
}

export default Recipe
