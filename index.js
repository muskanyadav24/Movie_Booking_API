require('dotenv').config()
const express = require('express')
const connectDb = require('./db/db')
const route = require('./routes/routes')

const app = express()
const port = process.env.PORT || 8001

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use("/", route)

// DB connect
connectDb()

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})