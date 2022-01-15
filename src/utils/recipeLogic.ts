import Fraction from "fraction.js"

const convertToMeasurement = (volume: number, measurement: number): string => {
  const fullSizedParts = Math.floor(volume / measurement)
  if (volume % measurement !== 0) {
    const fractions = new Fraction(volume % measurement / measurement).toFraction(true)
    return `${fullSizedParts} ${fractions}`
  }
  return fullSizedParts.toString()
}

const convertVolume = (milliliters: number): string => {
  if (milliliters >= 1000) return `${convertToMeasurement(milliliters, 1000)} l`
  if (milliliters >= 100) return `${convertToMeasurement(milliliters, 100)} dl`
  if (milliliters >= 15) return `${convertToMeasurement(milliliters, 15)} msk`
  if (milliliters >= 5) return `${convertToMeasurement(milliliters, 5)} tsk`
  return `${convertToMeasurement(milliliters, 1)} ml`
}

const convertWeight = (grams: number): string => {
  if (grams >= 1000) return `${Math.round(grams / 1000 * 100) / 100} kg`
  return `${Math.round(grams)} g`
}

export type IngredientType = {
  label: string
  amount?: number
  measurement?: "weight" | "volume" | "pieces"
}
export const getIngredientString = ({ label, amount, measurement }: IngredientType, base: number, servings: number): string => {
  if (amount === undefined) return label

  if (base !== servings) {
    amount = amount / 12 * servings
  }

  if (measurement === "pieces") return `${convertToMeasurement(amount, 1)} ${label}`
  if (measurement === "weight") return `${convertWeight(amount)} ${label}`
  return `${convertVolume(amount)} ${label}`
}