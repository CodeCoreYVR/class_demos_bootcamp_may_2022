const myRepeat = (str, index) => {
    return str.repeat(index);
}

function map(callback, arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const returnValue = callback(element, i);
        newArr.push(returnValue);
    }
    return newArr;
}

console.log(map(myRepeat, ['a', 'b', 'c', 'd', 'e']))
