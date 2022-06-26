import app from '../app'
import request from 'supertest'

//test get request to path /

describe('APP test', () => {
 test('GET /', () => {
  return request(app).get('/').expect(200).expect('hello world')
 })
})
