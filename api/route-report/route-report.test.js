const request = require('supertest')
const server = require('../server')

const db = require('./route-report-model')
const { expectCt } = require('helmet')

describe('server', () => {
    describe('POST /', () => {
        it('should return status code 200', () => {
            return request(server)
                .post('/api/route-report')
                .send({ date: '2020-06-01', route_type: 'Bus' })
                .then(res => {
                    expect(res.status).toBe(200)
                })
        }, 12000)

        it('should return the expected list', async () => {
            let expected = await db.getByDate('2020-06-01')

            expected = Array.from(expected.report).filter(item => item.route_id === 'Bus')
            expected[0].map_data = null
            expected = expected[0].route_table

            return request(server)
                .post('/api/route-report')
                .send({ date: '2020-06-01', route_type: 'Bus' })
                .then(res => {
                    expect(res.body).toStrictEqual(expected)
                })
        }, 15000)
    })
})