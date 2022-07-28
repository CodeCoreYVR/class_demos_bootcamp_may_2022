//AJAX - Asynchronous Javascript and XML

//AJAX is a set of techniques to fetch data from a server asynchronously
//without interfering with the display and behaviour of the existing page in the browser
//What this means is that our page loads while in the background AJAX fetches data
//from the server and makes it available for our use

//----------Native XMLHttpRequest--------->

//to use it, we need to set an instance of it
const students = new XMLHttpRequest();

//specify what we want to do with it
students.open("GET", "http://localhost:3000/students" );

students.onload = () => {
    console.log("XML Students: ", JSON.parse(students.responseText))
}

students.send()

