/*
Atividade 5:
Rota: /:operacao/:numero1/:numero2
Objetivo: Deve validar a operação e retornar o resultado da mesma. 
As operações podem ser soma , subtração , divisão ou multiplicação . 
Regra: Um middleware deve ser usado para cada operação. 
A operação deve ser recebida como parâmetro na rota.
*/
const express = require('express');
const routeOperations = require('./routeOperations');
const app = express();


app.use('/operations', routeOperations);

app.use(function (err, _req, res, _next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});
const PORT = 3000;
app.listen(PORT, () => console.log('ouvindo na porta 3000!'));