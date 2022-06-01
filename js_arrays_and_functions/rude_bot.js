//Exercise Rude Bot

function insult(name){
    const randNum = Math.floor(Math.random() * 3) //return a number between 0 and 2
    if (randNum === 0){
        return `${name} you smell funny!`
    } else if (randNum === 1){
        return `${name} you doofus!`
    } else {
        return `${name} your mother has a hamster!`
    }
}

console.log(insult("Bob"))

