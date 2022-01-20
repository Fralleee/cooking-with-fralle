import { FC, useEffect } from "react"
import styled from "styled-components"
import PlateImage from "images/items/plate.svg"
import Header from "./Header"
import { usePalette } from "color-thief-react"
import { motion } from "framer-motion"
import { fadeInTransition } from "utils/pageTransitions"

const OuterContainer = styled.div`  
  display: flex; 
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.color};

  &:after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.1);
    background: repeating-linear-gradient(
      90deg,
      rgba(0,0,0,.1),
      rgba(0,0,0,.1) 3rem,
      rgba(0,0,0,.05) 3rem,
      rgba(0,0,0,.05) 6rem
    );
    z-index: 0;
  }
`

type ImageType = { imageOffsetY: number }
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
  z-index: 1;

  svg {    
    position: absolute;
    left: 50%;
    top: -150px;
    transform: translateX(-50%);
    margin-top: ${props => props.imageOffsetY}px;
    max-width: 200px;
    width: 100%;
    user-select: none;
    stroke-width: .5px;
    stroke: rgba(0,0,0, .4);
    z-index: 2;
  }
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
  SVG: SVGImage
  imageOffsetY?: number
}
const Recipe: FC<RecipeType> = ({ children, title, titleSwatch, SVG, imageOffsetY = 0 }) => {
  const { data } = usePalette(SVG.url, 2, "hex")
  const color = data && data.length > 0 ? data[0] : "#ffffff"

  useEffect(() => {
    if (color !== "#ffffff")
      document.body.style.backgroundColor = color
  }, [color])

  return (
    <motion.div
      key={title}
      {...fadeInTransition}
      onAnimationComplete={() => window.scrollTo(0, 0)}
    >
      <OuterContainer color={color}>
        <Header title={title} color={titleSwatch} />
        <RecipeContainer imageOffsetY={imageOffsetY} >
          <SVG.Image />
          <Plate src={PlateImage} alt="Plate" />
          {children}
        </RecipeContainer>
      </OuterContainer>
    </motion.div>
  )
}

export default Recipe
