const request = require('supertest');
const app = require('../app');
const db = require('../db/index');

describe('Persistence Tests', () => {
    beforeAll(async () => {
        await db.sequelize.sync({ force: true }); // Reset the database before tests
    });

    afterAll(async () => {
        await db.sequelize.close(); // Close the database connection after tests
    });

    test('should create an item and persist it in the database', async () => {
        const itemData = { name: 'Test Item', description: 'This is a test item.' };

        const response = await request(app)
            .post('/api/items')
            .send(itemData)
            .expect(201);

        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe(itemData.name);
        expect(response.body.description).toBe(itemData.description);
    });

    test('should retrieve the created item from the database', async () => {
        const response = await request(app)
            .get('/api/items')
            .expect(200);

        expect(response.body).toHaveLength(1);
        expect(response.body[0]).toHaveProperty('name', 'Test Item');
    });

    test('should update the item and persist changes', async () => {
        const itemData = { name: 'Updated Item', description: 'This is an updated test item.' };

        const response = await request(app)
            .put('/api/items/1')
            .send(itemData)
            .expect(200);

        expect(response.body.name).toBe(itemData.name);
        expect(response.body.description).toBe(itemData.description);
    });

    test('should delete the item and ensure it is removed from the database', async () => {
        await request(app)
            .delete('/api/items/1')
            .expect(204);

        const response = await request(app)
            .get('/api/items')
            .expect(200);

        expect(response.body).toHaveLength(0);
    });
});