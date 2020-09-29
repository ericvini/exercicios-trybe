const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function turnoManha(objct,chave,valor){
  
  objct[chave]=valor;
  console.log(objct);
}

function listarKeys(obj){
console.log(Object.keys(obj));

}

const lenghtObj =(obj) => {

console.log(Object.keys(obj).length);
}

const listVlues = (obj) => {
console.log(Object.values(obj));
}

const allLessons = Object.assign({},{lesson1, lesson2, lesson3});
console.log(allLessons);


function somaEstudantes(obj){

  const array = Object.keys(obj);
  let total = 0;
  for(i in array){

    total += obj[array[i]].numeroEstudantes;
  }
 
  return total;
  }

  function getValueByNumber(obj, num){

 console.log(Object.values(obj)[num]);
  }

  function verifyPair(obj,chave,valor){
    let isEqual = false;
    const array=Object.entries(obj);
    for(i in array){

      if(array[i][0]===chave && array[i][1]===valor){
        isEqual = true;
      }
     
    }
    return isEqual;

  }

  
//turnoManha(lesson2,"turno","manhã");
//listarKeys(lesson1);
//lenghtObj(lesson3);
//listVlues(lesson1);
//console.log(somaEstudantes(allLessons));
//getValueByNumber(lesson1,1);
console.log(verifyPair(lesson3,'turno','maria'));
