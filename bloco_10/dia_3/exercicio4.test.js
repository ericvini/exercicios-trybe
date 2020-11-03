const { TestScheduler } = require('jest');
const service = require('./exercicio4');
jest.mock('./exercicio4')

describe('testando funções',()=>{
  test('mockando função para receber um parâmetro e retornar em caixa baixa',()=>{
    service.firtsFunction.mockImplementation(str=>str.toLowerCase());

    expect(service.firtsFunction('ERIC')).toBe('eric');
    expect(service.firtsFunction).toHaveBeenCalled();
    expect(service.firtsFunction).toHaveBeenCalledTimes(1);
    expect(service.firtsFunction).toHaveBeenCalledWith('ERIC');
  })
  test('mockando função que recebe um parâmetro e retorna a última letra',()=>{
    service.secondFunction.mockImplementation(str=>str.charAt(str.length-1));
    expect(service.secondFunction('ERIC')).toBe('C');
    expect(service.secondFunction).toHaveBeenCalled();
    expect(service.secondFunction).toHaveBeenCalledTimes(1);
    expect(service.secondFunction).toHaveBeenCalledWith('ERIC');
  })
  test('mockando função que recebe 3 parâmetros e os concatena',()=>{
    service.thirdFunction.mockImplementation((str1,str2,str3)=>str1.concat(str2,str3));
    expect(service.thirdFunction('a','b','c')).toBe('abc');
    expect(service.thirdFunction).toHaveBeenCalled();
    expect(service.thirdFunction).toHaveBeenCalledTimes(1);
    expect(service.thirdFunction).toHaveBeenCalledWith('a','b','c');
  })
})