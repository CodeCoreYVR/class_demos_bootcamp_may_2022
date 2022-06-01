function occurencesOf(char, str){
    let count = 0;  //hello

    for (let i=0; i< str.length; i++){
        //alternative: for (let i=1; i<= str.length; i++ )
        if (char === str[i]){
            count += 1 // count = count + 1
        }
    }
    return count
}

console.log(occurencesOf("l", "hello world"))
console.log(occurencesOf(" ", "bob likes apples"))
console.log(occurencesOf("c", "this is this"))

