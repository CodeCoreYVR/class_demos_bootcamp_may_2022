const ArrayUtils = {
    last(arr) {
        return arr[arr.length - 1]
    },
    first(arr) {
        return arr[0]
    },
    take: function (arr, n) {
        const result = []
        for (let i = 0; i < n; i++) {
            result.push(arr[i])
        }
        return result
    },
    toObject(arr) {
        const result = {};

        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            const key = element[0];
            const val = element[1];
            // element[0] => key
            // element[1] => value
            result[key] = val;
        }

        return result
    }
}

const testArr = [1, 2, 3, 4, 5];

// console.log(ArrayUtils.first(testArr));

// console.log(ArrayUtils.last(testArr));

// console.log(ArrayUtils.take(testArr, 3));

console.log(ArrayUtils.toObject([['a', 1], ['b', 2], ['c', 3]]));
