import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import App from "components/App"
import "styles/style.scss"
import "react-medium-image-zoom/dist/styles.css"

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/recipes">
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
