function mudarText() {
  const paragraph = document.getElementsByTagName('p')[1];
  paragraph.innerHTML = 'Ganhar 3.500 e estar em um empresa cabulosa!!';
}

mudarText();

function setCor() {
  const backGroundColor = document.getElementsByClassName('main-content')[0];
  backGroundColor.style.background = 'rgb(76,164,109)';
}

setCor();
