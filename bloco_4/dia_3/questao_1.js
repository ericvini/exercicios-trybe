/*
 * Cria uma matriz n x n preenchida por zeros
 */
function criarMatriz(n) {
	const mat = Array(n) //Cria um array de tamanho n
		.fill(undefined); //O preenche com valores vazios ('undefined')

	/*
	 * Para cada linha i, a preenche com um array de
	 * tamanho n preenchido com zeros
	 */
	for (const i in mat) {
		mat[i] = Array(n).fill(0);
	}

	return mat;
}

const n = 2;
const a = criarMatriz(n);

console.log(a);
