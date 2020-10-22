const generateRandomNumbers = () => {
  const myPromise = new Promise((resolve, reject) => {
    let arrayNumbers = [];
    const min = Math.ceil(1);
    const max = Math.floor(50);
    let sum = 0;
    for (let index = 0; index < 10; index += 1) {
      arrayNumbers[index] = Math.pow(Math.floor(Math.random() * (max - min + 1)) + min, 2);
      sum += arrayNumbers[index];
    }
    console.log(sum);
    if (sum < 8000) {
      resolve(sum);
    }
    reject();



  });
  myPromise
  .then((sum) =>[2,3,5,10].map(num=>sum/num))
  .then((array) =>console.log(array.reduce((num,acc)=>num+acc,0)))
  .catch (() => console.log("É mais de oito mil! Essa promise deve estar quebrada!"));
}

generateRandomNumbers();