const assert = require('assert')

function greet(name,msg='Hi'){
return `${msg} ${name}`
}

assert.equal(greet("John"), "Hi John")
assert.equal(greet("John", "Good morning"), "Good morning John")
assert.equal(greet("Isabela", "Oi"), "Oi Isabela")