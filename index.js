const connectDB = require('./conifg/db')
const express = require('express')
const routes = require('./Route/routes')
const app = express()

connectDB()
app.use(express.json())
app.use('/api', require('./Route/routes'))

const PORT = process.env.port || 8000
app.listen(PORT, function () {
  console.log(`Ready to Go! on port: ${PORT}`)
})
