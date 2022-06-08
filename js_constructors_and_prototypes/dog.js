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

rufus.bark();
winston.bark();
rufus.fetch();

winston.bark = function(){
    console.log(`${this.name}: bork!`)
}
winston.bark()

//Cannot do this:
// let ob = {}
// ob.prototype.fetch

