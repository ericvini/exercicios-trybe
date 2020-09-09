// menor valor

const numbers = [5, 1, 3, 301, 70, 8, 100, 301, 351, 27];

let menor = 1;

menorvalor(numbers);
function menorvalor(numbers) {
  for (i = 0; i < numbers.length - 1; i++) {
    for (j = 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        if (numbers[i] < menor) {
          menor = numbers[i];
        } else {
          menor = menor;
        }
      } else if (numbers[j] < menor) {
        menor = numbers[j];
      } else {
        menor = menor;
      }
    }
  }

  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] == menor) {
      console.log(i);
    }
  }
}
