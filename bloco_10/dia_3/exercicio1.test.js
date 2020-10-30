const { TestScheduler } = require('jest');
const service = require('./exercicio1');

test('Testando se a função foi chamada, qual o seu retorno e quantas vezes foi chamda',()=>{
  service.randomNumber = jest.fn().mockReturnValue(10);
  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
})
