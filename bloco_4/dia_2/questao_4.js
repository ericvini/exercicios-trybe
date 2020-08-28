//media dos valores array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var soma=0;
var aux=0;
var media=0;

for(i=0;i<numbers.length;i++){


aux=numbers[i];
soma=aux+soma;



}

media=soma/10;
console.log(media);

if(media>20){

console.log("valor maior que 20");

}else{

    console.log("valor menor ou igual a 20");
}
