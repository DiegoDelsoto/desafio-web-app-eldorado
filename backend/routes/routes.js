const routes = require ('express').Router()
const conn   = require ('../connection')

/******************************************
 *  TABLE TYPES
 ******************************************/

// SELECT Types
routes.get('/types', (req,res) => {
  let sql = `select * from types`;
  conn.query(sql, (err, rows, fields) => {
    if (err) {
      throw err; 
    }    
    res.json(rows);    
  })
})

// INSERT Types 
routes.post('/types/', (req,res) => {
  const {name} = req.body
  let sql = `insert into types (name) values ('${name}')`;
  conn.query(sql, (err, rows, fields) => {
    if (err) {
      throw err;
    }
    res.json({status: 'Types inserido com sucesso!'});
  })
})

// DELETE Types Devices
routes.delete('/types/:id', (req,res) => {
  const {id} = req.params;
  //console.log(req.query)
  let sql = `delete from types where id = '${id}' `;
  conn.query(sql,(err,rows,fields) =>{
    if (err) {
      throw err;
    }
    res.json({status: 'Type excluido com sucesso!'});
  })
})

// UPDATE Types
routes.put('/types/:id', (req,res) => {
  const {id} = req.params;
  const {name} = req.body;
  let sql = `update types set name = '${name}' where id = '${id}' `;
  conn.query(sql,(err,rows,fields) => {
    if (err) {
      throw err;
    }
    res.json({status: 'Types atualizado com sucesso!'});
  })

})

/*******************************************
 * TABLE DEVICES
 *******************************************/

// SELECT DEVICE
routes.get('/devices', (req,res) => {
  let sql = `select * from devices`;
  conn.query(sql, (err, rows, fields) => {
    if (err) {
      throw err; 
    }    
    res.json(rows);    
  })
})

// INSERT Devices 
routes.post('/devices/', (req,res) => {
  const {category,color,partNumber} = req.body
  let sql = `insert into devices (category,color,partNumber) values ('${category}','${color}','${partNumber}')`;
  conn.query(sql, (err, rows, fields) => {
    if (err) {
      throw err;
    }
    res.json({status: 'Device inserido com sucesso!'});
  })
})

// DELETE Devices
routes.delete('/devices/:id', (req,res) => {
  const {id} = req.params;
  //console.log(req.query)
  let sql = `delete from devices where id = '${id}' `;
  conn.query(sql,(err,rows,fields) =>{
    if (err) {
      throw err;
    }
    res.json({status: 'Device excluido com sucesso!'});
  })
})

// UPDATE Types
routes.put('/devices/:id', (req,res) => {
  const {id} = req.params;
  const {category,color,partNumber} = req.body;
  let sql = `update devices set category = '${category}', color = '${color} ', partNumber = '${partNumber} ' where id = '${id}' `;
  conn.query(sql,(err,rows,fields) => {
    if (err) {
      throw err;
    }
    res.json({status: 'Device atualizado com sucesso!'});
  })

})


module.exports = routes;