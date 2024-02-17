const request = require('supertest');
const app = require('./app');

describe('GET /plus/:a/:b', () => {
  it('responds with sum of two floating point numbers', async () => {
    const response = await request(app).get('/plus/2.1/3.5');
    expect(response.status).toBe(200);
    expect(response.text).toBe('5.6');
  });

  it('responds with sum of two integer numbers', async () => {
    const response = await request(app).get('/plus/2/3');
    expect(response.status).toBe(200);
    expect(response.text).toBe('5');
  });

  it('responds with sum of a floating point and an integer number', async () => {
    const response = await request(app).get('/plus/2.5/3');
    expect(response.status).toBe(200);
    expect(response.text).toBe('5.5');
  });

  it('responds with error if parameters are not numbers', async () => {
    const response = await request(app).get('/plus/a/b');
    expect(response.status).toBe(400);
  });

  it('responds with error if one parameter is missing', async () => {
    const response = await request(app).get('/plus/2');
    expect(response.status).toBe(404);
  });

  afterAll(async () => {
    try {
      await app.close()
    }
    catch (err) {
      console.log(err)
    }
  });
});
