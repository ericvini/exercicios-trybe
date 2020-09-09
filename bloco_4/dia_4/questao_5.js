function info(personagem, origem, nota, recorrente) {
  this.personagem = personagem;
  this.origem = origem;
  this.nota = nota;
  this.recorrente = recorrente;
}

const personagem1 = new info(
  'Margarida',
  'Pato Donald',
  'Namorada do personagem principal nos quadrinhos do Pato Donald',
  'Sim',
);
const personagem2 = new info(
  'Tio Patinhas',
  "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  'O último MacPatinhas',
  'Sim',
);

for (const i in (personagem1, personagem2)) {
  console.log(`${personagem1[i]} e ${personagem2[i]}`);
}
