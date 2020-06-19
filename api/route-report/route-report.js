const router = require('express').Router()
const db = require('./route-report-model')

router.post('/', (req, res) => {
    //this route takes the data that is stored in the reducer after the initial get request so the user doesnt always have to specify the date for this one
    db.getByDate(req.body.date)
        .then(data => {

            let report = Array.from(data.report).filter(item => item.route_id === req.body.route_type)
            report[0].map_data = null
            report = report[0].route_table

            res.status(200).json(report)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router