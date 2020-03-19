import React from "react"
import { useActions } from "../hooks"

export default props => {
  const { uncoolArray } = useActions()
  return (
    <div className="uncoolView">
      {uncoolArray.map(contact => (
        <div className="uncoolPeeps">
          <img src={contact.image} />
          <p>{contact.name}</p>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </div>
      ))}
    </div>
  )
}
