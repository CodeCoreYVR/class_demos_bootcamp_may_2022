function each(callback, arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        callback(element, i)
    }
}

each((val, index) => {
    console.warn(`${index} is ${val}`)
}, [1, 2, 3, 4, 5])

each((val, index) => {
    console.log(val + index)
}, [1, 2, 3, 4, 5])

