const request = require('supertest')
const server = require('../server')

const db = require('./report-model')
const knex = require('../../data/dbConfig')

describe('server', () => {
    describe('GET /api/report', () => {
        it('should return status code 200', () => {
            return request(server)
                .get('/api/report')
                .then(res => {
                    expect(res.status).toBe(200)
                })
                .catch()
        })
        // it('should return the expected report', async () => {
        //     let expected = await db.getAll()

        //     expected = Array.from(expected.report).filter(item => item.route_id === 'All')
        //     expected[0].map_data = null
        //     expected[0].route_table = null

        //     let knexExpected = await knex('reports').first()

        //     knexExpected = Array.from(knexExpected.report).filter(item => item.route_id === 'All')
        //     knexExpected[0].map_data = null
        //     knexExpected[0].route_table = null

        //     expect(expected).toBe(knexExpected)
        // })
    })
})