const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

it('transform word for uppercase',done=>{
uppercase('Éric',str=>{
  expect(str).toBe('ÉRIC');
  done();
});
});