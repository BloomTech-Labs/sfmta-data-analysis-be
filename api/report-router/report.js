const router = require('express').Router()

const db = require('./report-model')

router.get('/', (req, res) => {
    db.getAll()
        .then(data => {
            let report = Array.from(data.report).filter(item => item.route_id === 'All')
            report[0].map_data = null
            report[0].route_table = null
            res.status(200).json(report[0])
            // i had a problem with how the data was being stored so i came up with turning it into an array and filtering through it for the data i needed and removed the parts of the report that could wait until later to be sent over leading to what you see before you. map data is an array of geojson data that can probably be used to create a heat map and the route table is an array of the different routes for each transit type ALL having every route in its route table array
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

router.post('/type', (req, res) => {
    db.getAll()
        .then(data => {
            //this route just accepts the route_type that gets sent from front end and does the same as above
            let report = Array.from(data.report).filter(item => item.route_id === req.body.route_type)
            report[0].map_data = null
            report[0].route_table = null
            res.status(200).json(report[0])
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

router.post('/date', (req, res) => {
    //this db model is based on the only other column in the database and the format is yyyy/mm/dd which you can turn most dates into using the ISOString method 
    db.getByDate(req.body.date)
        .then(data => {
            let report = Array.from(data.report).filter(item => item.route_id === req.body.route_type)
            report[0].map_data = null
            report[0].route_table = null
            res.status(200).json(report[0])
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

module.exports = router