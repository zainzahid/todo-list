const request = require('supertest')
let app = require('./app')

describe('todo-list API test suite', () => {
    it('should add todo task, POST', () => {
        return request(app)
        .post('/todo')
        .send({
            name: 'sleep',
            status: false
        })
        .expect('Content-Type', /json/)
        .expect(201)
        .then((res) => {
            expect(res.body).toEqual(
                expect.objectContaining({
                    name: 'sleep',
                    status: false
                })
            )
        })
    })

    it('should return todo-list array, GET', () => {
        return request(app)
        .get('/todo')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
            expect(res.body).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                    name: expect.any(String),
                    status: expect.any(Boolean)
                    })
                ])
            )
        })
    })

})
