//////(1, 2) , (9 , 8), ( 67, 42), (56 ,92), (88, 94)....
////// X^2 + 2XY + Y^2
////// X^2 - 2XY + Y^2
////// X^2 + Y^2
////// X^2 - Y^2
////// (X+Y)(X-Y)

// let equ = equation(1, 2)

// let equ1 = equation(9, 8)

// let equ2 = equation(67, 42)

// let equ3 = equation(56, 92)

function equation(x, y, equFn){
    const result = equFn(x, y)
    return result
}

function equation1(x, y) {
    return x*x + 2*x*y + y*y
}

function equation2(x, y) {
    return x*x - 2*x*y + y*y
}

function equation3(x, y) {
    return x*x + y*y
}

function equation4(x, y) {
    return x*x - y*y
}


// console.log(equation(1, 2, equation1))
// console.log(equation(1, 2, equation2))
// console.log(equation(1, 2, equation3))
// console.log(equation(1, 2, equation4))


console.log(equation(1, 2, function (x, y) {
    return (x+y)*(x-y)
}))


console.log(equation(1, 2, (x, y) => {
    return (x+y)*(x-y)
}))

console.log(equation(1, 2, (x, y) => (x+y)*(x-y)))



function formattedFunction(a ,b) {
    console.log(`the values of this set are ${a} and ${b}`)   
}

formattedFunction(1, 2)
console.log(equ3)


// ///////////////-----------------//////////////////////
// function add(a, b) {
//     const result = a + b
//     return result 
// }

// const adder = function (a, b) {
//     const result = a + b
//     return result 
// }

// const adderFn = (a, b) => {
//     const result = a + b
//     return result
// }

// const adderFn1 = (a , b) => {
//     return a + b
// }

// const adderFn2 = (a , b) => a + b

// console.log(add(3, 2))
// console.log(adder(3, 2))
// console.log(adderFn(3, 2))
// console.log(adderFn1(3, 2))
// console.log(adderFn2(3, 2))


function message(num){
    if(num === 0) {
        return 
    } else {
        console.log('Hello World')
        message(num-1)
    } 
}

message(5)