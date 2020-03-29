const request = require('supertest');
const app = require('../../src/app');

const connection = require('../../src/database/connection');

describe('ONG', () =>{
  
  beforeEach(async () => {
    // Interessante usar que apaga a base de dados
    //await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });


  it('should be able to create a new ONG', async () =>{
    const response = await request(app)
      .post('/ongs')
      .send({
          name: "APAD",
          email: "alexsistemass@gmail.com",
          whatsapp: "6283216799",
          city: "Goiania",
          uf: "GO"
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
    
  });
});