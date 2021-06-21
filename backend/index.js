const express = require('express');
const port    = (process.env.port || 3000);
const routes  = require('./routes/routes');
const cors    = require('cors');

//express
const app = express();

//Cors
app.use(cors() );

//Return Json - test
app.use(express.json())

//configuration
app.set('port',port)

//routes
app.use('/app', routes)

//Inicialization express
app.listen(port,() => {
  console.log('Start server')
});
