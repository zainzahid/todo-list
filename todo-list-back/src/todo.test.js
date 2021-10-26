const request = require('supertest')
let app = require('./app')

describe('todo-list API test suite', () => {
    it('should add todo task, POST', () => {
        return request(app)
        .post('/todo')
        .send({
            test: 'testing for POST',
        })
        .expect('Content-Type', /json/)
        .expect(201)
    })

    it('should return todo-list array, GET', () => {
        return request(app)
        .get('/todo')
        .expect('Content-Type', /json/)
        .expect(200)
    })

})
