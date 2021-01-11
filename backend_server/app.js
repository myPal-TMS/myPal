const express = require('express');
const routes = require('./routes/routes')
// const path = require('path');


const app = express();

//Routes
app.use(routes)

//Port config
const port = process.env.Port || 5000;

app.listen(port, ()=>{
  console.log('********* SERVER RUNNING ON PORT: 5000 *********')
})

module.exports = app;
