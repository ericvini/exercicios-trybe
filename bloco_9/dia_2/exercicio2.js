const generateRandomNumbers = () => {
  const myPromise = new Promise((resolve, reject) => {
    let arrayNumbers = [];
    const min = Math.ceil(1);
    const max = Math.floor(50);
    let some = 0;
    for (let index = 0; index < 10; index += 1) {
      arrayNumbers[index] = Math.pow(Math.floor(Math.random() * (max - min + 1)) + min, 2);
      some += arrayNumbers[index];
    }
    console.log(some);
    if (some < 8000) {
      resolve();
    }
    reject();



  });
  myPromise
  .then(() => console.log("A soma foi menor que 8 mil"))
  .catch (() => console.log("A soma foi maior que 8 mil"));
}

generateRandomNumbers();