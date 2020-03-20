import React from "react"
import { useActions } from "../hooks"

export default props => {
  const { coolArray } = useActions()
  return (
    <div className="coolView">
      {coolArray.map(contact => (
        <div className="coolPeeps">
          <img src={contact.image} />
          <p>{contact.name}</p>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </div>
      ))}
    </div>
  )
}
