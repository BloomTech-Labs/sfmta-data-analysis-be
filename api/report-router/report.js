const router = require('express').Router()

const db = require('./report-model')

router.get('/', (req, res) => {
    db.getAll()
        .then(data => {
            let report = Array.from(data.report).filter(item => item.route_id === 'All')
            report[0].map_data = null
            report[0].route_table = null
            res.status(200).json(report[0])
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

router.post('/type', (req, res) => {
    db.getAll()
        .then(data => {
            let report = Array.from(data.report).filter(item => item.route_id === req.body.route_type)
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

router.post('/date', (req, res) => {
    db.getAll(req.body.date)
        .then(data => {
            let report = Array.from(data.report).filter(item => item.route_id === req.body.route_type)
            res.status(200).json(report)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

module.exports = router