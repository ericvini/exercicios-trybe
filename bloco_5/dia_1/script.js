function mudarText() {
  const paragraph = document.getElementsByTagName('p')[1];
  paragraph.innerHTML = 'estar trabalhando em uma empresa que eu goste';
}

mudarText();

function setCorAmarelo() {
  const backGroundColor = document.getElementsByClassName('main-content')[0];
  backGroundColor.style.background = 'rgb(76,164,109)';
}

setCorAmarelo();

function setCorBranco() {
  const backGroundColor = document.getElementsByClassName('center-content')[0];
  backGroundColor.style.background = 'white';
}

setCorBranco();

function mudarTextH1() {
  const title = document.getElementsByTagName('h1')[0];
  title.innerHTML = 'Exercício 5.1 - JavaScript';
}

mudarTextH1();

function mudarTextMaiusculo() {
  const paragraph = document.getElementsByTagName('p')[1];
  paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
}

mudarTextMaiusculo();

function exibirTagP() {
  const paragraph = document.getElementsByTagName('p');
  for (let i = 0; i < paragraph.length; i++) {
    console.log(paragraph[i].innerHTML);
  }
}

exibirTagP();
