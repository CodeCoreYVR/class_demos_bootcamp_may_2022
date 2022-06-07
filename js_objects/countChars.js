function countChars(strings) {
    const lowerCaseString = strings.toLowerCase(); // convert the string into lower case
    const stringArr = lowerCaseString.split(''); // split this string into letters array

    const count = {};
    // loop through each letter
    stringArr.forEach((letter) => {
        // count["a"] => undefined
        if (count[letter] !== undefined) {

            count[letter] = count[letter] + 1;
            // count[letter] += 1;
        } else {
            count[letter] = 1;
            // count["a"] => 1
        }
    });
    return count;
}

console.log(countChars("An archer"));


// 0, null, undefined => false
// if (condition) {
//     console.log("true");
// } else {
//     console.log("false");
// }
