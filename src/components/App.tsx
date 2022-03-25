import { Routes, Route, useLocation } from "react-router-dom"
import Browse from "components/Browse"
import { AnimatePresence } from "framer-motion"
import BackButton from "./BackButton"
import RecipeRenderer from "./RecipeRenderer"

const App = () => {
  const location = useLocation()
  return (
    <>
      {location.pathname !== "/" && <BackButton />}
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Browse />} />
          <Route path="*" element={<RecipeRenderer />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
