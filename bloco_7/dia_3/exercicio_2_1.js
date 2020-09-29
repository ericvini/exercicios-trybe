const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const expected = myRemove([1, 2, 3, 4 ], 5);
//console.log(expected);
assert.deepStrictEqual(expected,[ 1, 2, 3, 4 ],'o array esperado é [1, 2, 4]');