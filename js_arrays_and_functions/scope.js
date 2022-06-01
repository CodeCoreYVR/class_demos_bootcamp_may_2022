//original variable declaration
var newVariable = 'hello world' //value can be changed

//New way after ES6
let letVariable = 'hello again' //value can be changed
const constantVariable = "My value cannot be changed"

//const and let are block scoped:
if (true){
    let i = 'hi'
}
// console.log(i) //ReferenceError: i is not defined because i is not within the if statement block

//i is declared within if's blocktherefore only exists inside of it
//i is only available within the scope of the if block
//i is not accessible outside, therefore you will have a reference error
//it is block scoped

//Scoped for all blocks, especially function blocks
// function hi (){
//     let j = 10
// }

// console.log(j)

//Block scoped - variable only accessible in that block

//Variables are always accessible inside child blocks, so declaring a variable 
//outside in the parent block, will make it available in the child block

//All variables can be shadowed
//Meaning it can be declared twice, in the parent block as well as the child block, 
//and have different values, depending on where it is referenced, like below:

let i = 'bye'

if (true){
    //if block begins
    let i = 'Hello'
    //if block ends
}
//i is only available within the scope of the if block
console.log(i)

//i has the value of 'bye', but only has the value of 'Hello' within the if block

//VAR
//var is an old JavaScript way of declaring variables
//it is said to be function scoped
//it is not block scoped, so the variable is still accessible
//to the parent block if declared in the child block
//the only way to restrict this behaviour is to restrict it with an 
//Immediately Invoked Function Expression (IIFE), like this:

(function(){
    var i = 'hello';
})();

console.log(i)

//in this case i will throw a reference error



