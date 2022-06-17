// Normally you would not just create an instance of a Promise, you would create a function that returns an instance of a Promise
// So that way we can reuse the promise
// So, we are going to wrap the promise from makingPromises.js into a function
// and make it a little more dynamic:

function wait(n) {
  return new Promise((res, rej) => { // this promise will wrap the async function setTimeout
    setTimeout(() => {
      res(n) // if you need to pass something you can
      rej()
    }, n); // wait "n" seconds
  })
}

console.time('t') // starts a timer in the console

wait(3000)
.then((n) => {
  console.log(`waited ${n} milliseconds`);
  console.timeLog('t'); // this logs out how much time has passed after the timer has been set
}).catch(() => {
  console.log('failed');
})

wait(2000)
.then((n) => {
  console.log(`waited ${n} milliseconds`);
  console.timeLog('t'); // this logs out how much time has passed after the timer has been set
}).catch(() => {
  console.log('failed');
})

