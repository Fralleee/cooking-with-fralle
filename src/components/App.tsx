import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import Browse from "components/Browse"
import NoMatch from "components/NoMatch"
import Cupcakes from "components/recipes/Cupcakes"
import Pancakes from "components/recipes/Pancakes"

const App = () => {
  return (
    <>
      <Router basename="/recipes">
        <Routes>
          <Route path="/">
            <Route index element={<Browse />} />
            <Route path="cupcakes" element={<Cupcakes />} />
            <Route path="pancakes" element={<Pancakes />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Router>
      <Outlet />
    </>
  )
}

export default App
