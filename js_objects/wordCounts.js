const wordCounts = function (strings) {
    // "this is this and that"
    const stringArr = strings.split(' ');
    // ["this","is",'this',"and","that"]
    const wordCount = {};
    // "this" => {this:sth} wordCount["this"] => sth
    // wordCount["this"] => undefined 
    stringArr.forEach((string) => {
        if (wordCount[string] !== undefined) {
            wordCount[string] = wordCount[string] + 1;
        } else {
            wordCount[string] = 1;
            // wordCount => { this:1 }
        }
    });
    console.log(wordCount);
}


wordCounts("this is this and that")