// declaring the object
function bark() {
    console.log('woof woof')
}
const dog = {
    age: 10,
    'firstName': 'Benji',
    'lastName': 'BurlyBottom',

    toys: [
        'Amazon Delivery Box',
        "Pork Leg",
        "Rubber Bunny"
    ],

    bark: bark,

    sleep() {
        console.log('zzzzzz')
    }
}

const cat = {
    name: "Alex"
}

//Adding new key in the object
dog['nickName'] = 'Tom'

// console.log(Object.keys(dog))

// console.log(Object.values(dog));

//Merging the objects
// const catdog = Object.assign(dog, cat)
// console.log(catdog)
// console.log(dog)
// console.log(cat)

//Iteration over object
// for(let key in dog) {
//     console.log(dog[key])
// }

// dog.bark('woof')
dog.sleep()