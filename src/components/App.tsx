import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AllRecipes from "components/AllRecipes"
import Layout from "components/Layout"
import NoMatch from "components/NoMatch"
import Cupcakes from "components/recipes/Cupcakes"
import Pancakes from "components/recipes/Pancakes"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllRecipes />} />
          <Route path="cupcakes" element={<Cupcakes />} />
          <Route path="pancakes" element={<Pancakes />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
