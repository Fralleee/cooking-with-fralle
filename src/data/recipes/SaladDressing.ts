import { foodKeywords } from "data/keywords"
import { dressing } from "images/items"

const SaldDressing: Recipe = {
  title: "Salladsdressing",
  to: "/salad-dressing",
  image: dressing,
  keywords: ["sallad", "dressing", ...foodKeywords],
  titleSwatch: "red",
  imageOffset: -40,
  base: 2,
  ingredients: [
    {
      label: "",
      data: [
        { label: "Olja", amount: 15, measurement: "volume" },
        { label: "Majonnäs", amount: 15, measurement: "volume" },
        { label: "Senap", amount: 30, measurement: "volume" },
        { label: "Vinäger", amount: 30, measurement: "volume" },
        { label: "Knorr vitlöksdressing/grekisk dressing", amount: 1, measurement: "pieces" },
        { label: "Svartpeppar" }
      ]
    }
  ],
  instructions: ["Blanda ihop alla ingredienser och rör om väl.", "Låta gärna stå 30-60 minuter."]
}

export default SaldDressing
