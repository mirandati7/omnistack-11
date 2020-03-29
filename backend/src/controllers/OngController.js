const generateUniqueId = require('../utils/generateUniqueId');

const connection = require('../database/connection');

module.exports = {
  //listando todas a ongs cadastradas no bd
 async index(req,res)  {
    const ongs = await connection('ongs').select('*');
  
    return res.json(ongs);
  
  },
  
  async create(req,res){
    console.log(req.body);
    const { name, email, whatsapp, city, uf } = req.body;
    const id  = generateUniqueId();
    console.log( name, email, whatsapp, city, uf);

    await  connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
      });

    return res.json({id});

  }
};