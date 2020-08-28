//menor valor

let numbers = [5, 300, 1, 301, 70, -5, 100, 301, 350, 27];


var menor=1;

for(i=0;i<numbers.length-1;i++){

    for(j=1;j<numbers.length;j++){

        if(numbers[i]<numbers[j]){

            

            if(numbers[i]<menor){

                menor=numbers[i];

            }else{

                menor=menor;
            }

        }else{

            if(numbers[j]<menor){

                menor=numbers[j];

            }else{


                menor=menor;
            }

            



        }


    }


}



console.log(menor);
