const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

server.use(cors())
server.use(helmet())

server.use(express.json())

const db = require('./check-model')

server.get('/', (req, res) => {
    res.status(200).json('hello world')
})

server.get('/checking', (req, res) => {
    db.checking()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

server.post('/date', (req, res) => {
    res.status(200).json(req.body)

})

module.exports = server