const router = require('express').Router()

const db = require('./report-model')

router.get('/', (req, res) => {
    db.get()
        .then(data => {
            let report = Array.from(data.report).filter(item => item.route_id === 'All')
            res.status(200).json(report)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

module.exports = router