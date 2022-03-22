import { Routes, Route, useLocation } from "react-router-dom"
import Browse from "components/Browse"
import NoMatch from "components/NoMatch"
import Cupcakes from "components/recipes/Cupcakes"
import Pancakes from "components/recipes/Pancakes"
import Saladdressing from "components/recipes/Saladdressing"
import Mudcake from "components/recipes/Mudcake"
import ApplePie from "components/recipes/ApplePie"
import DijonTravolta from "components/recipes/DijonTravolta"
import { AnimatePresence } from "framer-motion"
import BackButton from "./common/BackButton"

const App = () => {
  const location = useLocation()
  return (
    <>
      {location.pathname !== "/" && <BackButton />}
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Browse />} />
          <Route path="cupcakes" element={<Cupcakes />} />
          <Route path="pancakes" element={<Pancakes />} />
          <Route path="salad-dressing" element={<Saladdressing />} />
          <Route path="mudcake" element={<Mudcake />} />
          <Route path="apple-pie" element={<ApplePie />} />
          <Route path="dijon-travolta" element={<DijonTravolta />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
