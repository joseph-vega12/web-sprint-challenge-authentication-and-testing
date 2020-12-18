const server = require('./server');
const request = require('supertest');

test('sanity', () => {
  expect(true).toBe(true)
})

describe('endpoint', () => {
  describe('[GET] api/users', () => {
    it('responds with 200 OK', async () => {
      const res = await request(server).get('api/users')
      expect(res.status).toBe(200)
    })
  })
})