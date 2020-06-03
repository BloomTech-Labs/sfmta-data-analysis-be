const db = require('../../data/dbConfig')

module.exports = {
    get,
    getRoutes,
    getCoords
}

function get() {
    return db('routes')
        .select('route_type').distinctOn('routes.route_type')
}

function getRoutes(filter) {
    return db('routes')
        .where(filter)
        .select('route_name', 'id')
}

function getCoords(id) {
    return db('routes')
        .where({ id })
        .select('content')
}