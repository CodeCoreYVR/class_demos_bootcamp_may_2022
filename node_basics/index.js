// require is a function used to load modules
// it takes in one arg: a string which is the relative path to a file

// const addition = require('./add') // the variable addition is assigned the value of whatever module.exports is from the file at ./add.js

const primes = require('./primes')
// We can omit the .js because require will assume that your are passing it a JS file. will throw an error otherwise
const add = require('./add')

// console.log(primes.reduce(addition, 0))

// with modules you can have 2 things with the same name:
primes.forEach((number) => {
  console.log(add.add(number, 1));
})



