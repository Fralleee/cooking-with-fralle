import { bakingKeywords } from "data/keywords"
import { cupcake } from "images/items"

const Cupcakes: Recipe = {
  title: "Muffins",
  to: "/cupcakes",
  image: cupcake,
  keywords: ["muffins", "cupcakes", ...bakingKeywords],
  titleSwatch: "fizzy-light",
  imageOffset: 0,
  base: 12,
  ingredients: [
    {
      label: "",
      data: [
        { label: "vetemjöl", amount: 213, measurement: "weight" },
        { label: "socker (blanda fritt: farin | muscavado | vanilj)", amount: 150, measurement: "weight" },
        { label: "bakpulver", amount: 10, measurement: "volume" },
        { label: "salt", amount: 5, measurement: "volume" },
        { label: "mjölk", amount: 180, measurement: "volume" },
        { label: "smält smör och olja", amount: 170, measurement: "weight" },
        { label: "ägg", amount: 2, measurement: "pieces" },
        { label: "citronzest" }
      ]
    }
  ],
  instructions: [
    "Sätt på ugnen på 180 grader.",
    "Blanda torra ingredienser i en liten skål.",
    "Blanda våta ingredienser i en större skål.",
    "Häll i torra till de våta och blanda med slickepott.",
    "Häll i smeten i formerna.",
    "Baka i 15-20 minuter. Kolla med tandpetare.",
    "Låt muffinsen svalna helt innan du äter dem."
  ]
}

export default Cupcakes
