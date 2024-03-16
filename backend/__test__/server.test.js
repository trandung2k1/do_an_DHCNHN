const request = require('supertest');
const mongoose = require('mongoose');
require('dotenv').config();
const app = require('../app');
describe('Test the root path', () => {
    beforeAll(async () => {
        server = app.listen(+process.env.PORT + 1);
        await mongoose.connect(process.env.DB_URL);
    });

    afterAll(async () => {
        server.close();
        await mongoose.connection.close();
    });
    test('It should response the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBe('Welcome to the server');
    });
});
