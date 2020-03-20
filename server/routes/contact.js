const express = require("express")
const router = express.Router()
const axios = require("axios")

const data = {
  contacts: [],
  cool: [],
  uncool: []
}

router.get("/newcontact", (req, res, next) => {
  axios.get("https://randomuser.me/api/?results=1").then(resp => {
    const obj = resp.data.results[0]
    const contact = {
      name: `${obj.name.first} ${obj.name.last}`,
      phone: obj.phone,
      image: obj.picture.large,
      email: obj.email
    }

    res.json(contact)
  })
})

router.post("/cool", (req, res, next) => {
  data.cool.push(req.body)
  res.json(data.cool)
})

router.post("/uncool", (req, res, next) => {
  data.uncool.push(req.body)
  res.json(data.uncool)
})

router.get("/cool", (req, res, next) => {
  res.json(data.cool)
})

router.get("/uncool", (req, res, next) => {
  res.json(data.uncool)
})

module.exports = router
