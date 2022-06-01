const sum = function(numbers){
    let total = 0;
    for(let number of numbers){
        if(typeof number === "number"){
            total += number // total = total + number
        }
    }
    return total;
}

let arr = [1,2,3,4,5,6]
let arr2 = [1,2,3,'bob',4,5,6]
console.log(sum(arr))
console.log(sum(arr2))
