const router = require('express').Router()

const db = require('./report-model')

router.get('/', (req, res) => {
    console.log(req.body.rid)
    db.getAll(req.body.rid)
        .then(report => {
            res.status(200).json(report)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

router.post('/type', (req, res) => {
    db.getAll()
        .then(data => {
            let report = Array.from(data.report).filter(item => item.route_id === req.body.route_type)
            res.status(200).json(report[0])
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

router.post('/date', (req, res) => {
    db.getAll(req.body.date)
        .then(data => {
            let report = Array.from(data.report).filter(item => item.route_id === req.body.route_type)
            res.status(200).json(report[0])
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

module.exports = router