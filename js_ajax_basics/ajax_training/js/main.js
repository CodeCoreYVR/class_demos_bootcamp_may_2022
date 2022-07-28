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

//-------------jQuery AJAX request---------->
$.ajax({
    method: "GET",
    url: "https://pokeapi.co/api/v2/pokemon/ditto",
    //this is a function that will be invoked after the request is successful:
    // success(data){
    //     console.log(data)
    // }
    success: function(data){
        console.log("jquery pokemon: ",  data)
    }
})

//-----------XML AJAX Pokemon Example-------->

const getReq = new XMLHttpRequest();

getReq.addEventListener(
    'load',
    function(){
        console.log("Pikachu: ", this.responseText)
    }
)

//open() initializes  request. It takes 2 arguments:
//1 - name of the HTTP verb
//2 - api endpoint/ url
getReq.open(
    "GET",
    "http://pokeapi.co/api/v2/pokemon/pikachu"
)

//trigger the send of the request:
getReq.send()

//-------------Axios req to data.json departments------->

const fetchDataButton = document.querySelector("#fetch-button");
fetchDataButton.addEventListener("click", async() => {
    const response = await axios.get("http://localhost:3000/departments");
    console.log("axios data: ", response.data)
})

//------------SuperAgent req to data.json students-------->
superagent.get("http://localhost:3000/students").then(res => {
    console.log("superagent data: ", JSON.parse(res.text));
})

//-----------Fetching data using Fetch AJAX---------------->
// const fetchDataButton = document.querySelector("#fetch-button");
//above already exists because of axios example
fetchDataButton.addEventListener("click", () => {
    fetch("http://localhost:3000/students").then(res => {
        return res.json();
    }).then(data => {
        console.log("fetch: ", data)
    })
})


