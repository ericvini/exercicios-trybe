const assert = require('assert')

const myList = [1, 2, 3]

const swap=(myList)=>myList.reverse();

const swappedList = swap(myList)

assert.equal(swappedList[0], 3)
assert.equal(swappedList[1], 2)
assert.equal(swappedList[2], 1)