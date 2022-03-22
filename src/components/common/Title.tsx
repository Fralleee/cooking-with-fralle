import { FC } from "react"
import styled from "styled-components"
import { animateUp, gradient } from "styles/keyframes"
import { getTitleFontSize } from "utils/stringHelpers"

const TitleText = styled.h1<{ fontSize: number; divider?: number; absolute?: boolean }>`
  ${props =>
    props.absolute
      ? `
    position: absolute;
    bottom: 0;
  `
      : "position: relative;"}
  width: 100%;
  text-align: center;
  animation: ${gradient} 5s var(--easeInOutQuadratic) infinite, ${animateUp} 600ms 50ms var(--easeOutBack);
  background: ${props => (props.color ? `var(--${props.color}-gradient)` : "var(--cozy-gradient)")};
  background-size: 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: ${props => (props.divider ? 1 : 2)}px;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  font-size: clamp(${props => props.fontSize}px, calc(6vw + 1.25rem), 12rem);
  ${props =>
    props.divider
      ? `font-size: clamp(${props.fontSize / props.divider}px, calc(${6 / props.divider}vw + ${1.25 / props.divider}rem}), ${
          12 / props.divider
        }rem); `
      : `font-size: clamp(${props.fontSize}px, calc(6vw + 1.25rem), 12rem); `}
`

type TitleProps = {
  color?: string
  subtitle?: string
}
const Title: FC<TitleProps> = ({ children, color, subtitle }) => {
  if (typeof children !== "string") return <p>Something went wrong</p>

  const fontSize = getTitleFontSize(children.length, window.screen.width)
  return (
    <TitleText color={color} fontSize={fontSize}>
      {children}
      {subtitle && (
        <TitleText fontSize={fontSize} divider={4} absolute>
          {subtitle}
        </TitleText>
      )}
    </TitleText>
  )
}

export default Title
