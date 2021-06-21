const mysql = require('mysql');

const connection = mysql.createConnection({
  host:'127.0.0.1',
  user: 'root',
  password: 'admin',
  port : '3306',
  database: 'app'
})

connection.connect( (err) => {
  if (err) {
    console.log ('Erro na conexão do BD (Mysql)' + err)
  } else {
    console.log('Conexão com sucesso!');
  }
})

module.exports = connection;