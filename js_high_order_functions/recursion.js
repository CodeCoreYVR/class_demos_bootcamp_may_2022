function sum(arr) {
    // first time => [1,2,3,4]
    // second time => [2,3,4]
    // third time => [3,4]
    // forth time => [4]
    // fifth time => []
    if (arr.length === 0) {
        return 0;
    } else {
        // first arr.slice(1) => [2,3,4]
        // second = [3,4]
        // third = [4]
        // forth = []
        return arr[0] + sum(arr.slice(1))
    }
}


function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(3))