//cria matriz nxn
function criarMatriz(n) {
	const mat = Array(n) 
		.fill("*"); 

	
	for (const i in mat) {
		mat[i] = Array(n).fill("*");
	}

	return mat;
}

const n = 4;
const a = criarMatriz(n);

console.log(a);