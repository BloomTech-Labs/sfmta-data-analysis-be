const db = require('../../data/dbConfig')

module.exports = {
    get,

}

function get() {
    return db('routes')
        .select('routes.id', 'route_name', 'route_type')
}
