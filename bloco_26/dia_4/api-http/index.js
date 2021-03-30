const express = require('express');
const app = express();
app.use(express.json());

app.get('/ping', (res) => res.json({ "message": "Pong!" }));

app.post('/hello', (req, res) => {
  const { name, age } = req.body;
  if (parseInt(age) < 17) return res.status(401).json({ "message": `Unauthorized` })
  res.status(200).json({ "message": `Hello, ${name}!` })
})

app.put('/hello', (req, res) => {
  const { name, age } = req.body;

  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
})

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));