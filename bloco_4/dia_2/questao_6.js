//quantidades de impares

let numbers = [2, 4, 1, 1, 2, 8, 100, 2, 36, 28];

let j=0;
for(i=0;i<numbers.length;i++){

    if((numbers[i]%2)!==0){

        j++;

    }

}

if(j>0){

    console.log(j);

}else{

    console.log("não existe números ímpares");
}


