const db = require('../../data/dbConfig')

module.exports = {
    getAll,
    getByDate
}



function getAll() {
    return db('reports')
        .last()
}

function getByDate(date) {
    return db('reports')
        .where({ date })
        .first()
}