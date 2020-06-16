const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()
server.use(cors())
server.use(helmet())

server.use(express.json())

const routeRouter = require('./route-router/routes')
const reportRouter = require('./report-router/report')
const routeReportRouter = require('./route-report/route-report')

server.get('/', (req, res) => {
    res.status(200).json('hello world')
})

server.use('/api', routeRouter)
server.use('/api/report', reportRouter)
server.use('/api/route-report', routeReportRouter)


module.exports = server