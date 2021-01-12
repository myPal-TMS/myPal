const express = require('express');
const routes = require('./routes/routes')
// const path = require('path');


const app = express();

//Routes
app.use('/api', routes)

//Port config
const port = process.env.Port || 3000;

app.listen(port, ()=>{
  console.log('********* SERVER RUNNING ON PORT: 3000 *********')
})

module.exports = app;
