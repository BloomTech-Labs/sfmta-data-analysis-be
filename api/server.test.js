const request = require('supertest')
const server = require('./server')

describe('server', () => {
    describe('GET /', () => {
        it('should return an error', () => {
            return request(server)
                .get('/hashtagsandpotatoes')
                .then(res => {
                    expect(res.status).toBe(404)
                })
        })

        it('should return 200', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })

        it('should return hello world message', () => {
            request(server)
                .get('/')
                .then(res => {
                    expect(res.body).toBe('hello world')
                })
        })
    })
})