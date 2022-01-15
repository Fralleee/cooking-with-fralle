import { Link } from "react-router-dom"

const AllRecipes = () => {
  return (
    <>
      <h1>Fralles</h1>
      <h2>bakery</h2>
      <div>AllRecipes</div>
      <nav>
        <ul>
          <li><Link to="/">Browse</Link></li>
          <li><Link to="/cupcakes">Cupcakes</Link></li>
          <li><Link to="/pancakes">Pancakes</Link></li>
          <li><Link to="/nothing-here">Nothing Here</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default AllRecipes
