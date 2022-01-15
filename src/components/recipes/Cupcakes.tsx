
import CupcakeImage from "images/items/cupcake.svg"
import Recipe from "components/common/Recipe"
import Title from "components/common/Title"
import SubTitle from "components/common/SubTitle"
import Ingredients from "components/common/Ingredients"
import StepByStep from "components/common/StepByStep"
import Image from "components/common/Image"


const Cupcakes = () => {
  return (
    <Recipe>
      <Title>Cupcakes</Title>
      <SubTitle>12 servings</SubTitle>
      <Image src={CupcakeImage} alt="Cupcake" />
      <Ingredients>
        <li>213 g flour</li>
        <li>150 g sugar (mix: farin / muscavado / vanilla)</li>
        <li>2 tsp baking powder</li>
        <li>1 tsp salt</li>
        <li>180 ml milk</li>
        <li>170 g melted butter and vegetable oil</li>
        <li>2 room temperature eggs</li>
        <li>Lemon zest</li>
      </Ingredients>
      <StepByStep>
        <li>Heat oven to 180C</li>
        <li>Mix dry ingredients in a small bowl</li>
        <li>Mix wet ingredients in a larger bowl</li>
        <li>Combine the dry ingredients into the larger bowl and mix with a spatula</li>
        <li>Pour the mixture into a cupcake tray</li>
        <li>Bake for 15-25 minutes. Check with tooth pick.</li>
        <li>Let the cupcakes cool completely.</li>
      </StepByStep>
    </Recipe>
  )
}

export default Cupcakes
