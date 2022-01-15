
import PancakesImage from "images/items/pancakes.svg"
import Recipe from "components/common/Recipe"
import Title from "components/common/Title"
import SubTitle from "components/common/SubTitle"
import Ingredients from "components/common/Ingredients"
import StepByStep from "components/common/StepByStep"
import Image from "components/common/Image"


const Pancakes = () => {
  return (
    <Recipe>
      <Title>Pancakes</Title>
      <SubTitle>6 pancakes</SubTitle>
      <Image src={PancakesImage} alt="Pancakes" />
      <Ingredients>
        <li>2 eggs</li>
        <li>2 dl flour</li>
        <li>3 dl milk</li>
        <li>2 tbsp melted butter</li>
        <li>2 tbsp sugar</li>
        <li>1-2 measuring spoons salt</li>
      </Ingredients>
      <StepByStep>
        <li>Mix dry ingredients</li>
        <li>Add in melted butter</li>
        <li>Add in eggs</li>
        <li>Slowly whisk in the milk to prevent clumps</li>
        <li>Fry it baby!</li>
      </StepByStep>
    </Recipe>
  )
}

export default Pancakes
