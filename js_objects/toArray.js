function toArray(obj) {
    const result = [];

    for (let key in obj) {
        const tempArr = [];
        tempArr.push(key);
        tempArr.push(obj[key]);
        result.push(tempArr);
        // [['a',1]]
        // [['a',1],['b',2]]
    }

    return result;
}

console.log(toArray({ a: 1, b: 2, c: 3 }));
