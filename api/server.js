const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

server.use(cors())
server.use(helmet())

server.use(express.json())

const routeRouter = require('./route-router/routes')

server.get('/', (req, res) => {
    res.status(200).json('hello world')
})

server.use('/api/routes', routeRouter)

module.exports = server