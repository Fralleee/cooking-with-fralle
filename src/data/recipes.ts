const requireModule = require.context("./recipes", false, /\.ts$/)
const modules: Recipe[] = []

requireModule.keys().forEach((filename: string) => {
  modules.push(requireModule(filename).default)
})

export default modules
