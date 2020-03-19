const express = require("express")
const contactRoutes = require("./routes/contact")

const app = express()
const port = 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", contactRoutes)

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})
