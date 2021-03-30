const express = require('express');
const routeSimpsons = require('./routeSimpsons');
const app = express();

app.use('/simpsons',routeSimpsons);

app.use(function(err,req,res,next){
  res.status(500).send(`Algo deu errado"! Mensagem: ${err.message}`);

});

app.listen(3000)