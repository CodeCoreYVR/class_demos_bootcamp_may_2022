arr = ['a', 'b', 'c']

//regular for loop:
//This is whe you need an index

for (let i = 0; i < arr.length; i++ ){
    console.log('index:', i, 'value:', 'arr[i]')
}

//for...of loop
//when you don't need the index but just the values of the elements
for (let value of arr){
    console.log("value;", value)
}




