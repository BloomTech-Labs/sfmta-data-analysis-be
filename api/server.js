const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

const corsOptions = {
    origin: 'https://www.datadriventransit.org/'
}

server.use(cors(corsOptions))
server.use(helmet())

server.use(express.json())

const db = require('./route-router/route-model')
const routeRouter = require('./route-router/routes')
const reportRouter = require('./report-router/report')

server.get('/', (req, res) => {
    res.status(200).json('hello world')
})

server.use('/api/', routeRouter)
server.use('/api/report', reportRouter)


module.exports = server