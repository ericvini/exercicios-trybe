//maior valor

let numbers = [-5, 5, 3, 301, 70, 8, 100, 301, 351, 27];

var maior =0;

maiorvalor(numbers);
function maiorvalor(numbers) {
	for (i = 0; i < numbers.length - 1; i++) {
		for (j = 1; j < numbers.length; j++) {
			if (numbers[i] > numbers[j]) {
				if (numbers[i] > maior) {
					maior = numbers[i];
				} else {
					maior = maior;
				}
			} else {
				if (numbers[j] > maior) {
					maior = numbers[j];
				} else {
					maior = maior;
				}
			}
		}
	}

	for (i = 0; i < numbers.length; i++) {
		if (numbers[i] == maior) {
			console.log(i);
		}
	}
}
