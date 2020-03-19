import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Cool from "./Cool"
import Uncool from "./Uncool"
import Contact from "./Contact"
import "../styles/App.css"

export default props => {
  return (
    <Router>
      <div className="conatiner">
        <Route exact path="/" component={Contact} />

        <Route exact path="/cool" component={Cool} />

        <Route exact path="/uncool" component={Uncool} />
      </div>
    </Router>
  )
}
