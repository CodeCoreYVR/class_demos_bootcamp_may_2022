//Constructor function:
function Dog(name){
    this.name = name;
}

//Outside constructor function, we are assigning 
//these prototype methods to all instances of the Dog constructor
Dog.prototype.bark = function(){
    console.log(`${this.name}: woof!`)
}

Dog.prototype.fetch = function(){
    console.log(`${this.name} is fetching...`)
}

const rufus = new Dog('rufus');
const winston = new Dog('winston');

//Brand new Constructor for DoggoFighters:

function DoggoFighter(name, specialAbility){
    this.name = name;
    this.specialAbility = specialAbility;
}

DoggoFighter.prototype.useSpecial = function(){
    console.log(`${this.name} uses the special ability: ${this.specialAbility}`)
}

const doge = new DoggoFighter('doge', 'ninja attack')
doge.useSpecial();
// doge.bark() //will not work because 'doge' is not an instance of a Dog constructor yet

//What we want to do:
// DoggoFighter.prototype.__proto__ = Dog.prototype

//To set DoggoFighter as child and Dog as parent:
Object.setPrototypeOf(DoggoFighter.prototype, Dog.prototype)
//first arg is what you want to set, second is what you want to set it to
//child first, parent second
console.log(doge.__proto__ === DoggoFighter.prototype) //true
console.log(doge.__proto__ === Dog.prototype) //false

doge.bark()


