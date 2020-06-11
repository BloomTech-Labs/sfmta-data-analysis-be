const db = require('../../data/dbConfig')

module.exports = {
    getAll,
    getByDate
}



function getAll(rid) {
    return db('reports')
        .where({ rid })
}

function getByDate(date, rid) {
    return db('reports')
        .where({ date: date, rid: rid })
        .first()
}