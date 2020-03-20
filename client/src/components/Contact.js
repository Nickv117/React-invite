import React from "react"
import { useActions } from "../hooks"
import "../styles/App.css"
import { Link } from "react-router-dom"

export default props => {
  const { contact, moveCool, moveUncool } = useActions()
  return (
    <div>
      <div className="coolNav">
        <div className="contactView">
          <Link to="/">Home</Link>
        </div>
        <div className="coolButton">
          <Link to="/cool">Cool</Link>
        </div>
        <div className="uncoolButton">
          <Link to="/uncool">Uncool</Link>
        </div>
      </div>
      <div className="contactWrapper">
        <img src={contact.image} />
        <p>{contact.name}</p>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      </div>
      <div className="coolButtons">
        <button onClick={e => moveCool(contact)}>Cool</button>
        <button onClick={e => moveUncool(contact)}>Uncool</button>
      </div>
    </div>
  )
}
