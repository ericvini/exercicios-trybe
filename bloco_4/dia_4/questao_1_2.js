function verificaPalindrome(palavra) {
  const str = palavra;
  const strReverse = str.split('').reverse().join('');

  if (str === strReverse) {
    return true;
  }
  return false;
}

const res = verificaPalindrome('reviver');
console.log(res);
