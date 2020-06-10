const router = require('express').Router()

const report = require('../../utils/all-data-mock')

router.get('/', (req, res) => {
    res.status(200).json(report)
})

module.exports = router