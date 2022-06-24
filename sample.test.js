const supertest = require('supertest')
const express = require('express')
const app = express()
const request = supertest(app)


describe('Sample test', () => {
    test('should be true === true', async () => {
        const resp = await request.get('/foo')
        expect(resp.status).toBe(200)

    })
})




const baseUrl = 'https://jsonplaceholder.typicode.com/';

// describe('Todos endpoint', () => {
//     it('should return a 200 status code', async () => {
//         const response = await request.get('/');

//         expect(response.statusCode).toBe(200);
//     });
// })

describe('just simple fummy', () => {
    it('should be true', () => {
        expect(true).toBe(true)
    })
})

describe('jendpoint test', () => {
    it('should be 200', async () => {

        const response = await request.get('/foo')
        console.log(response.statusCode, 'status code')
        // .expect('Content-Type', "text/html")
        // .expect('Content-Length', '15')
        expect(response.statusCode).toBe(200)
    })
})

// describe('foo endpoint test', () => {
//     it('foo must be 200', () => {
//         request.get('/bar').expect(200)
//     })
// })

