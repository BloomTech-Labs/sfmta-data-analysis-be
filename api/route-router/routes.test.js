const request = require('supertest')
const server = require('../server')

const db = require('../route-router/route-model')

describe('server routes', () => {

    it('should fail if wrong endpoint', () => {
        return request(server)
            .get('/blablahblah')
            .then(res => {
                expect(res.status).toBe(404)
            })
    })
    describe('GET /api/type', () => {

        it('should return 200 if endpoint is correct', () => {
            return request(server)
                .get('/api/type')
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })

        it('should return the same array as the model', async () => {
            const expected = await db.get()

            return request(server)
                .get('/api/type')
                .then(res => {
                    expect(res.body).toStrictEqual(expected)
                })
        })
    })

    describe('POST /api/route', () => {
        it('should return 500 if nothing is sent', () => {
            return request(server)
                .post('/api/route')
                .then(res => {
                    expect(res.status).toBe(500)
                })
        })

        it('should return 200 if the correct object is sent', () => {
            return request(server)
                .post('/api/route')
                .send({ route_type: 'Bus' })
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })

        it('should return the same array as the model', async () => {
            const expected = await db.getRoutes({ route_type: 'Bus' })

            return request(server)
                .post('/api/route')
                .send({ route_type: 'Bus' })
                .then(res => {
                    expect(res.body).toStrictEqual(expected)
                })
        })
    })

    describe('GET /api/route/:id', () => {
        it('should return 404 if no id is passed', () => {
            return request(server)
                .get('/api/route/')
                .then(res => {
                    expect(res.status).toBe(404)
                })
        })

        it('should return 200 if an id is passed', () => {
            return request(server)
                .get('/api/route/1')
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })

        it('should return the same route as the model', async () => {
            const expected = await db.getCoords(1).first()

            return request(server)
                .get('/api/route/1')
                .then(res => {
                    expect(res.body).toStrictEqual(expected)
                })
        })
    })
})