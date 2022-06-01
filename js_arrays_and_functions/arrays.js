let fruit_1 = 'apple';
let fruit_2 = 'banana';
let fruit_3 = 'pineapple';

//declare an array like this, with []
let fruitArray = ['apple', 'banana', 'pineapple'];

//apple = index 0 = fruitArray[0]

//Arrays can contain any type of values
// [1,2,3,4,5,6,7,8]; //numbers
// ['a','b','c']; //strings
// [add(1,2), add(4,5), "hello", true, 6, [1,2]]; //mixed
// [[1,2], [3,4], [5,6]]; //arrays as values
// [1,[2,[3,[4, [5, 6]]]]]; //nested array

//new Array(10) - another way of declaring an array, but not recommended

//Array operations and Methods

//Immutable methods (does not change original array):

//.length to get the length of the array 
// console.log(fruitArray.length) //3

//grabbing the specific index value of an array
let arr = ['a', 'b', 'c', 'd']
// console.log(arr[2]) //c
// console.log(arr[0]) //a
// console.log(arr[-1]) //undefined - no negatives in JS array index
// console.log(arr[arr.length - 1]) //d

//concat to append two arrays together
// console.log(arr.concat(['e','f','g']))
// console.log(arr)

//slice
arr.slice(0,2) //returns the values from the first index given up to but excluding the second index argument
//i.e. will return ['a','b']
//it does not mutate/change original array
arr.slice(-3)  //slice with negative will extract from the end of the array index
//will return [ 'b', 'c', 'd' ]

//join
arr.join("") // "abcd"
arr.join(" ") // "a b c d"
arr.join(" xxx ") // "a xxx b xxx c xxx d"
//join does not change the original array

//Mutable Methods (changes original array - mutation):
const arr2 = ['a', 'b', 'c', 'd']

//arr2 = ""  this will not work because arr2 is a const variable
//however, you can change the values within the array
// arr2[1] = 'f'
// console.log(arr2)


//pop() returns the last element in the index, and permanently removes it from the original array

arr2.pop() // return 'd' and change original array to ['a','b','c']

arr2.unshift('f') // return 4 for new length of array, and change original array to ['f','a','b','c']

arr2.shift() // take away the first element and return 'f', and change original array to ['a','b','c']

arr2.push('g') //will return new length of array, and and change original array to ['a','b','c', 'g']


// //To check if a value is an array
Array.isArray(value) //Array.isArray(arr2) would return true

// //To check if a specific value is in a given array
arr2.includes('a') //returns true is value exists in array




