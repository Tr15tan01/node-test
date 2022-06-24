const request = require('supertest')
const app = require('./index')

describe('Sample test', () => {
    test('should be true === true', () => {
        // const response = await request(app).get('/').expect(200)
        expect(true).toBe(true)
        // expect(response.statusCode).toBe(200)
    })
})