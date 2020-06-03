const route = require('express').Router()

const db = require('./route-model')

route.get('/type', (req, res) => {
    db.get()
        .then(routes => {
            res.status(200).json(routes)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: err })
        })
})

route.post('/route', (req, res) => {
    db.getRoutes({ route_type: req.body.route_type })
        .then(routes => {
            res.status(200).json(routes)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

route.get('/route/:id', (req, res) => {
    db.getCoords(req.params.id)
        .then(coords => {
            res.status(200).json(coords)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

module.exports = route