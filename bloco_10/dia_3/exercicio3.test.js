const service = require('./exercicio1');

describe('testando implementações',()=>{
  test('mockando função parar receber 3 parâmetros e retornar sua multiplicação',()=>{
    service.randomNumber = jest.fn().mockImplementation((a,b,c)=>a*b*c);
  
    expect(service.randomNumber(2,2,2)).toBe(8);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2,2,2);
  
    
  })
  test('mockando função que recebe um parâmetro e retorna seu dobro',()=>{
    service.randomNumber.mockReset();
    expect(service.randomNumber).toHaveBeenCalledTimes(0);
    service.randomNumber.mockImplementation(a=>a*2);
    expect(service.randomNumber(2)).toBe(4);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2);
  })
})
