//function

function add (a,b){
    const total = a + b;
    return total
}

console.log(add(1,6)) //returns 7

//add - value
//add() - expression
//add(5,6) - still an expression

let sum = function (a,b){
    const total = a + b;
    return total
}

console.log(sum(2,2))

