const db = require('../data/dbConfig')

module.exports = {
    checking
}

function checking() {
    return db('*')
}