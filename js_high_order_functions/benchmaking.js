function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1)
    }
}

function factorialIter(n) {
    let result = 1;
    for (let i = 1; i < n; i++) {
        result = result * i
    }
    return result;
}
console.time("factorial")
factorial(200)
console.timeEnd("factorial")

console.time("factorialIter")
factorialIter(200)
console.timeEnd("factorialIter")