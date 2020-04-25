const express = require('express')
const helmet = require('helmet')
const carsRouter = require('./cars/cars-router')

const server = express()
const port = process.env.PORT || 7777

server.use(helmet())
server.use(express.json())

server.use('/', carsRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "An error was detected."
    })
})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})