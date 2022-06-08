//Classes are created with a special keyword 'class'
class Doggo{
    //constructor is a special method for classes
    //this is fired off when we create a new instance of a Doggo
    //it is similar to the constructor function
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //class methods are lie methods created in a constructor
    //but these methods are prototype methods
    bark(){
        console.log(`${this.name}: woof!`)
    }
}

//to construct a new instance of a Doggo class, you still use the new keyword
//and pass it a name and an age
const lucky = new Doggo('lucky', 2)

lucky.bark()

class DoggoFighter extends Doggo {
    constructor(name,age,specialAbility){
        super(name, age)
        this.specialAbility = specialAbility;
    }

    useSpecial(){
        console.log(`${this.name} uses the special ability: ${this.specialAbility}`) 
    }
}

const buster = new DoggoFighter('buster', 25, 'hide mode');
buster.useSpecial()
buster.bark()





