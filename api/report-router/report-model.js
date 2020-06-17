const db = require('../../data/dbConfig')

module.exports = {
    getAll,
    getByDate
}



function getAll() {
    return db('reports')
        .orderBy('id', 'desc')
        .first()
}

function getByDate(date) {
    return db('reports')
        .where({ date })
        .first()
}