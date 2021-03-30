function doMatch(a,b,c){
return new Promise((resolve, reject)=>{
  const paramTypes = [a,b,c].map((param)=> typeof param);

if(paramTypes.some((paramType)=> paramType !== "number" )){
  return reject(new Error("Informe apenas números"));
}
  const result = (a+b)*c;

  if(result < 50){
    return reject(new Error("Valor muito baixo"));
  }
  resolve(result);
});
}

function getRandomNumber() {
  return Math.floor(Math.random() * 5);
}
const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);


doMatch(...randomNumbers)
  .then(result=>console.log(result))
  .catch(err=>console.error(err.message));

  
  