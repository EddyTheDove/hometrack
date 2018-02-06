let request = require('supertest')
import app from '../../src'
let expect = require('chai').expect

describe('Our application', function() {
    it('should understand basic mathematical principles', function(done) {
        request(app)
        .get('/')
        .expect('Content-Type', /json/)
        .expect(400, done)
    })
})
