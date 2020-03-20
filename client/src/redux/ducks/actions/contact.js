import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET_CONTACT = "contact/GET_CONTACT"
const GET_COOL = "contact/GET_COOL"
const GET_UNCOOL = "contact/GET_UNCOOL"

const initialState = {
  contact: {},
  cool: [],
  uncool: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT:
      return { ...state, contact: action.payload }

    case GET_COOL:
      return { ...state, cool: action.payload }

    case GET_UNCOOL:
      return { ...state, uncool: action.payload }

    default:
      return state
  }
}

function getContact() {
  return dispatch => {
    axios.get("/api/newcontact").then(resp => {
      dispatch({
        type: GET_CONTACT,
        payload: resp.data
      })
    })
  }
}

function Cool(contact) {
  return dispatch => {
    axios.post("/api/cool", contact).then(resp => {
      dispatch(getContact())
    })
  }
}

function Uncool(contact) {
  return dispatch => {
    axios.post("/api/uncool", contact).then(resp => {
      dispatch(getContact())
    })
  }
}

function getCool() {
  return dispatch => {
    axios.get("/api/cool").then(resp => {
      dispatch({
        type: GET_COOL,
        payload: resp.data
      })
    })
  }
}

function getUncool() {
  return dispatch => {
    axios.get("/api/uncool").then(resp => {
      dispatch({
        type: GET_UNCOOL,
        payload: resp.data
      })
    })
  }
}

export function useActions() {
  const dispatch = useDispatch()

  const contact = useSelector(appState => appState.contactState.contact)

  const cool = contact => dispatch(getCool(contact))
  const coolArray = useSelector(appState => appState.contactState.cool)
  const uncool = contact => dispatch(getUncool(contact))
  const uncoolArray = useSelector(appState => appState.contactState.uncool)

  const moveCool = contact => dispatch(Cool(contact))

  const moveUncool = contact => dispatch(Uncool(contact))

  useEffect(() => {
    dispatch(getCool())
    dispatch(getUncool())
    dispatch(getContact())
  }, [dispatch])
  return {
    contact,
    cool,
    coolArray,
    uncool,
    uncoolArray,
    moveCool,
    moveUncool
  }
}
