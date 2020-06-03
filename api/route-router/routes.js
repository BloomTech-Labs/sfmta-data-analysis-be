const route = require('express').Router()

const db = require('./route-model')

route.get('/', (req, res) => {
    db.get()
        .then(routes => {
            res.status(200).json(routes)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: err })
        })
})

module.exports = route