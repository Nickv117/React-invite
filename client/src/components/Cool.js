import React from "react"
import { useActions } from "../hooks"

export default props => {
  const { cool } = useActions()
  return (
    <div className="coolView">
      {cool.map(contact => (
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
