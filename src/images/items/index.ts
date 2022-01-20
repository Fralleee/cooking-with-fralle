const requireModule = require.context(".", false, /\.svg$/)
const myIcons = require.context("!svg-react-loader!.", false, /\.svg$/)

export const cupcake: SVGImage = { url: requireModule("./cupcake.svg").default, Image: myIcons("./cupcake.svg") }
export const dressing: SVGImage = { url: requireModule("./dressing.svg").default, Image: myIcons("./dressing.svg") }
export const mudcake: SVGImage = { url: requireModule("./mudcake.svg").default, Image: myIcons("./mudcake.svg") }
export const pancakes: SVGImage = { url: requireModule("./pancakes.svg").default, Image: myIcons("./pancakes.svg") }
export const pie: SVGImage = { url: requireModule("./pie.svg").default, Image: myIcons("./pie.svg") }
export const drink: SVGImage = { url: requireModule("./drink.svg").default, Image: myIcons("./drink.svg") }
export const empty: SVGImage = { url: requireModule("./empty.svg").default, Image: myIcons("./empty.svg") }

const Images = {
  cupcake,
  dressing,
  mudcake,
  pancakes,
  pie,
  drink,
  empty
}

export default Images
