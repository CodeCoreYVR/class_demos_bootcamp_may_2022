const log = console.log

//<node>.querySelector('css-selector') a method provided to us that allows us to select an individual Node within the DOM
//it will only return the first node that matches the selector
//The querySelector method belongs to all Node objects, including document

//Select the div with the id of "larry-the-lion"

const larryTheLion = document.querySelector("#larry-the-lion")
// log(larryTheLion)

const moneyBagsMichael = document.querySelector("#moneybags-michael")
// log(moneyBagsMichael)

const teamSalmon = document.querySelector(".team.salmon")
// log(teamSalmon)

//Use querySelectorAll to return a NodeList of all the elements that match the css selector
const teams = document.querySelectorAll(".team")

//querySelectorAll will return all the nodes that match the selector in an Array-like structure.  
//It is NOT an Array but has some built in methods that mimic an array
//for example, iterating with "for .. of" and ".forEach()"
//It does not have a map or reduce method for example.

// for (const node of teams){
//     log(node)
// }

// teams.forEach(node => log(node))

//-------------Picking Doggos-------------->

const moneyBagsMichaelAndLarryTheLion = document.querySelectorAll('#larry-the-lion, #moneybags-michael')
// log(moneyBagsMichaelAndLarryTheLion)

const allTeamTealButFirst = document.querySelectorAll('.team.teal .doggo:not(:first-child)')
// log(allTeamTealButFirst)

const secondDogs = document.querySelectorAll('.team .doggo:nth-child(2)')
// log(secondDogs)

//--------Selecting by element-------------->

const toxicTim = document.getElementById('toxic-tim')
// log(toxicTim)

const teams2 = document.getElementsByClassName('team')
// log(teams2)

//--------Select surrounding nodes----------->

const inBreadDog = document.querySelector('#inbread-dog')
// log(inBreadDog)

// log(inBreadDog.previousElementSibling) //if there are no previous siblings, it will return null
// log(larryTheLion.previousElementSibling) // returns the previous sibling to larryTheLion, which is inBreadDog
// log(larryTheLion.nextElementSibling) // returns the next sibkling, in this case moneyBagsMichael
// log(inBreadDog.nextElementSibling.nextElementSibling) // you can chain the methods to grab the specific sibling down the line, in this case MoneyBagsMichael
// log(inBreadDog.parentElement) // this will return the parent element, in this case the div of the class roster
// log(inBreadDog.parentElement.parentElement) //this will return the div of team teal

//--------Select children nodes----->
const roster = inBreadDog.parentElement
// log(roster)

// log(roster.children[0]) //return inBreadDog
// log(roster.children[1]) //returns larryTheLion
// log(roster.children[2]) //returns moneyBagsMichael
// log(roster.children) //returns a HTML Collection that is array-like and can be iterated through

rosterCollection = roster.children
// log(rosterCollection)

// for (const node of rosterCollection){
//     log(node)
// }

// log(roster.firstElementChild) //returns inBreadDog
// log(roster.lastElementChild) // returns moneyBagsMichael

//--------matches----------->
//<node>.matches check if a node matches a css selector and return a boolean

// log(inBreadDog.matches('.fighter')) //returns true
// log(inBreadDog.matches('.team.salmon')) //returns false
// log(inBreadDog.matches('.team.teal')) //returns false because a doggo just has a class of .doggo or .fighter

//------closest------------>
//<node>.closest('<css-query>')
//Searches all ancestors of element (beginning with itself)
//for the first node that matches the query.
//If no matching ancestors, it will return null
//It can be thought of as a reverse querySelector

// log(inBreadDog.closest('.team')) //returns the team teal div node, which is the parent of the parent of inBreadDog
// log(toxicTim.closest('div')) //returns itself because it is a node that is a div
// log(inBreadDog.closest('.team.salmon'))

//------------Manipulating Nodes----------->

//When using the . notation, we use camelCase to refer to CSS property names
//for example, border-radius will be style.borderRadius

// inBreadDog.style.border = 'solid medium red';
// teamSalmon.style.backgroundColor = 'orange';
// toxicTim.style.justifyContent = 'center';

//Nodes are just special JS objects, so we can also use the [] notation:
// toxicTim.style["background-image"] = "url(images/paws.jpg)"

//-----Computed styles of nodes-------->
//To read the actual computed styles of a node, use the global function getComputedStyle(<node>) getComputedStyle(toxicTim);
//this global function is only available in the browser, so using it in our index.js will not work

// getComputedStyle(toxicTim) // returns the computed/real styles of the node given as an argument
// getComputedStyle(toxicTim).backgroundColor //returns the specific backgroundcolor of toxicTim

//-------CHANGING THE CONTENTS OF A NODE--------->

// <node>.innerHTML property will allow us to get/set the HTML within the selected node 
//it will return all of the HTML content as a string

//<node>.outerHTML property will allow us to get or set the whole node

// log(toxicTim.innerHTML) //returns just the inner content of the node in a string form
//toxicTim.innerHTML = '<h1>Non Toxic</h1><h1>Non Toxic</h1><h1>Non Toxic</h1><h1>Non Toxic</h1><h1>Non Toxic</h1>'  //this will change the inner content

// log(toxicTim.outerHTML) //returns the whole node including its contents

// <node>.innerText is a getter/setter for the text within a node - returns all the content with the HTML stripped
// i.e. it effectively just returns the text
// We can change this text by setting it to something else

// toxicTim.innerText = 'something new'

//-----------Changing ids and classes------>

//get or set ids
//<node>.id -> .id gets the id property of the node
//<node>.id = "new id" -> set it to a new id
// toxicTim.id //returns 'toxic-tim'

//Same with a class
//Note: because class is a reserved word, we use camelCase "className" instead to refer to node classes
//<node>.className -> .className gets the class property of the node
//<node>.className = "new class" -> set it to a new class
// toxicTim.className //returns 'doggo fighter'

//classList is an abstraction of className, and even though it's a bit slower to use than ClassName,
//it makes it easier to manipullate nodes.  It returns a special array-like object instead of a string,
//and has extra properties like .add and .remove that csan be used on it.

// toxicTim.className = 'doggo fighter hello' //this will add the .hello classs to toxicTim
// toxicTim.classList.add('hello') //this will apend the node with an additional hello class and keep the original classes as well
// toxicTim.className = 'hello' //this will replace the original with only the hello class
// toxicTim.classList.remove('doggo') //removes the given class argument from the node
// toxicTim.classList.add('labourer') //this will add the class css property of 'labourer; to toxicTim
// toxicTim.classList.remove('fighter') //this will remove the css property class of fighter from toxicTim

//getAttribute
//setAttribute
//hasAttribute
//removeAttribute

toxicTim.getAttribute('class') //returns value of the class attribute
toxicTim.getAttribute('id') // returns the value of id attribute
toxicTim.setAttribute('data-id', '7xz80') // adds an attribute called data-id with the value of 7xz80
// toxicTim.setAttribute('bark', 'woof') //add an attribute with the name "bark" and the value of "woof"
toxicTim.hasAttribute('id') //true
toxicTim.hasAttribute('bark') //false if 'bark attribute does not exists
toxicTim.removeAttribute('data-id')

//---------Remove nodes
//<node>.remove() - remove the node permanently
//toxicTim.remove() - will remove toxicTim permanently
// toxicTim.remove()

//--------Vandalize the Arena------->

//1
// twoTeams = document.getElementsByClassName('team')

// for (const node of twoTeams){
//     node.style.backgroundColor = 'fuchsia'
// }
// //2
// allDoggos = document.querySelectorAll('.doggo')

// allDoggos.forEach(node => {
//     node.innerText = 'Rob the Slob'
// })
// //3
// allDoggos.forEach(node => {
//     node.style.backgroundImage = "url(https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=602&q=80)"
// })

//-------Creating Elements---------->

const drillBitDarrel = document.createElement('div')

//add an id
drillBitDarrel.id = 'drill-bit-darrel';

//add a class
// drillBitDarrel.className = 'doggo fighter';
drillBitDarrel.classList.add('doggo')
drillBitDarrel.classList.add('fighter')

//add a h1 with the dog's name
drillBitDarrel.innerHTML = '<h1> Drill Bit Darrel </h1>'
drillBitDarrel.style.backgroundImage = 'url(./images/drill_bit_darel.jpg)'

//drillBitDarrel node has been created but it needs to be attached to a node on the DOM
//we are going to attach him to the teal team node

const teamTeal = document.querySelector('.team.teal')
const tealRoster = teamTeal.querySelector('.roster')

//appendChild -> appends a new node as the last child of an existing node
// tealRoster.appendChild(drillBitDarrel)

//insertBefore -> used to append the new node to a specific position in the node, relative to a sibling node
tealRoster.insertBefore(drillBitDarrel, larryTheLion) //first argument is new node, second is the node you want to move behind/next to the new node 


//clone nodes
// tealRoster.insertBefore(drillBitDarrel.cloneNode(), moneyBagsMichael)
// tealRoster.appendChild(drillBitDarrel.cloneNode())
