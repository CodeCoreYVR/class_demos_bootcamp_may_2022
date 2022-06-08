//Object Review:

// let obj = {
//     key: value
// }

const guest1 = {
    name: 'Steph',
    email: 'stephanie@codecore.ca',
    visitTime: '9:10am',
    phone: '778-555-5555',
    printGuest: function(){
        console.log(`${this.name} visited us at ${this.visitTime} today`)
    }
}

const guest2 = {
    name: 'Bob',
    email: 'bob@codecore.ca',
    visitTime: '11:10am',
    phone: '604-555-5555',
    printGuest: function(){
        console.log(`${this.name} visited us at ${this.visitTime} today`)
    }
}


//One way of copyinmg an object:

const guest3 = Object.assign({}, guest1)
// console.log(guest3)
guest3.name = "Bill"
// console.log(guest3)

//------Creating a Constructor---------->
//Constructors are functions that are used to create objects
// Convention is to capitalize constructor names
//The arguments that the constructor function takes are the properties
//that the constructor will have

function Guest(name, email, visitTime, phone){
    this.name = name;
    this.email = email;
    this.visitTime = visitTime;
    this.phone = phone;
    this.printGuest = function(){
        console.log(`${this.name} visited us at ${this.visitTime} today`) 
    }
    return console.log("Don't fire off 'this' in a constructor function")
    //'this' loses its context when outside of the function and will append
    //itself to the global object instead of the instance of the created object
}


//To create an instance of a new object of the "Guest" 
//constructor function we use the "new" keyword and call the function
const g1 = new Guest('Sally', 'sally@example.com', '12pm', '555-555-5555')
const g2 = new Guest('Sam', 'sam@example.com', '12:10pm', '555-555-1111')

console.log(g1)
console.log(g2)

//Method to check if something is an instance of a constructor
console.log(guest1 instanceof Guest) //false
console.log(g1 instanceof Guest) //true

//  Arrow functions are expressions and cannot be used as constructor functions
// const Dog = (name) => {
//     this.name = name
// }

// new Dog('Bork') //will throw error



