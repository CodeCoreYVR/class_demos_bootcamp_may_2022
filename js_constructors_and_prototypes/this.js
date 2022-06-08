// function printThis(){
//     console.log(this) //will refer to global object or undefined if in strict mode
// }

const obj = {
    printThis: function(){
        console.log(this)
    }
}

function can(fn){
    console.log(fn())
}

// can(obj.printThis) //this refers to global object or undefined

//============Bind===================>
//used to counter behaviour of 'this' and to set reference to 'this'
const bindPrintThis = obj.printThis.bind(obj)
// can(bindPrintThis) //this refers to obj


