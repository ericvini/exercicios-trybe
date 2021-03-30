const express = require('express');
const router = express.Router();

router.get('/:operations/:numero1/:numero2', (req, res) => {

  const { numero1, numero2, operations } = req.params;
  let result;
  switch (operations) {
    case 'soma':
      result = parseInt(numero1) + parseInt(numero2);
      break;

    case 'multiplicacao':
      result = parseInt(numero1) * parseInt(numero2);
      break;

    case 'divisao':
      result = parseInt(numero1) / parseInt(numero2);
      break;
    case 'subtracao':
      result = parseInt(numero1) - parseInt(numero2);
      break;

    default:
      break;
  }
  res.status(200).send({ total: result });
});

module.exports = router;