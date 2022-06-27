import app from '../app'
import request from 'supertest'

const data = {
 name: 'NEW TOUR',
 duration: 3,
 maxGroupSize: 12,
 difficulty: 'easy',
 ratingsAverage: 4.9,
 ratingsQuantity: 33,
 price: 1497,
 summary: 'Enjoy the Northern Lights in one of the best places in the world',
 description:
  'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!',
 imageCover: 'tour-9-cover.jpg',
 images: ['tour-9-1.jpg', 'tour-9-2.jpg', 'tour-9-3.jpg'],
 startDates: ['2021-12-16,10:00', '2022-01-16,10:00', '2022-12-12,10:00'],
}

describe('TOURS', () => {
 test('GET /api/tours', () => {
  return request(app).get('/api/tours').expect('Content-Type', /json/)
 })

 test('POST /api/tours', () => {
  return request(app)
   .post('/api/tours')
   .send(data)
   .expect(201)
   .expect('Content-Type', /json/)
   .then((res) => {
    expect(res.body.tour).toEqual(expect.objectContaining(data))
   })
 })

 // test get tour from /api/tours/:id
 test('GET /api/tours/:id', () => {
  return request(app)
   .get('/api/tours/9')
   .expect(200)
   .expect('Content-Type', /json/)
   .then((res) => {
    expect(res.body).toEqual(expect.objectContaining(data))
   })
 })

 test('GET /api/tours/:id 404', () => {
  return request(app).get('/api/tours/999').expect(404)
 })

 //test update tour from /api/tours/:id
 test('PATCH /api/tours/:id', () => {
  return request(app)
   .patch('/api/tours/9')
   .send({
    name: 'NEW TOUR TOUR',
    duration: 3,
    maxGroupSize: 12,
    difficulty: 'easy',
    ratingsAverage: 4.9,
   })
   .expect(200)
   .expect('Content-Type', /json/)
 })

 // test delete tour from /api/tours/:id
 test('DELETE /api/tours/:id', () => {
  return request(app).delete('/api/tours/9').expect(204)
 })
})
