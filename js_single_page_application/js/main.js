//"http://localhost:3000/api/v1/questions" // GET index
//"http://localhost:3000/api/v1/questions/:id" // GET show
//"http://localhost:3000/api/v1/questions" // POST create
//"http://localhost:3000/api/v1/questions/:id" // DELETE destroy
//"http://localhost:3000/api/v1/questions/:id" // PATCH update

//Base URL that we are going to send the requests to (the API server)
const baseURL = "http://localhost:3000/api/v1";

//REQUESTS
//Create a helper module for Question that has all the question related requests

//Similar to Message module from yesterday's Chatr:

// const Message = {
//     all() {
//       return fetch("/messages").then((res) => res.json());
//     },
//     //usage:
//     //Message.all().then(data => console.table(data))
//     create(params) {
//       return fetch("/messages", {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify(params),
//       });
//     },
//     //usage
//     //Message.create({ body: "Hello World"}).then(console.log("Message created"))
//     destroy(id) {
//       return fetch(`messages/${id}`, { method: "DELETE" });
//     },
//   };

//========Question========>
const Question = {
    //Fetch all the questions from server
    index(){
        return fetch(`${baseURL}/questions`)
        //by default fetch is a GET request
        //so we don't need to specify the method
        //we know the path to the backend because we created the API,
        //but for external API's you will need to look at the documentation
        //If you create an API for other's to access, you are responsible to 
        //specify the paths for the requests in your documentation

        //fetch will always return a promise, and a promise
        //will always return a response object, and the
        //response object represents the response and its data. We want the data of the actual response
        .then(response => {
            console.log(response);
            return response.json()
            //normally we want it to be in some sort of text format, but now we want it in json
            //response object has a method .json() that will parse the body of response into json format
        })
    },
    create(params){
        return fetch(`${baseURL}/questions`, {
            method: 'POST',
            credentials: 'include', //need this for cookies
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then((res) => res.json());
    },
    show(id){
        return fetch(`${baseURL}/questions/${id}`)
        .then(res => res.json());
    }
}

//======Navigation=========>

function navigateTo(id){
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active')
    })

    document.querySelector(`.page#${id}`).classList.add('active')

    document.querySelectorAll('a.item').forEach(page => {
        page.classList.remove('active')
    })
}

const navbar = document.querySelector('.menu.navbar')

navbar.addEventListener('click', event => {
    const navLink = event.target.closest('a')

    if(navLink){
        event.preventDefault()
        const pageId = navLink.dataset.target
        navigateTo(pageId)
    }
})


//declare a container for the list of questions
const questionsContainer = document.querySelector('.question-list');
//Index loading questions
function loadQuestions(){
    Question.index()
    .then(questions => {
        //iterate through each question and each question will return a string item
        console.log(questions)
        questionsContainer.innerHTML = questions.map( q => {
            return `
            <li>
                <a class="question-link" data-id="${q.id}" href="#">${q.id} - ${q.title}</a>
            </li>
            `
        }).join("");
    })
}

const questionShowPage = document.querySelector('#question-show')

function renderQuestionShowPage(id){
    Question.show(id)
    .then(({ id, title, body, author, like_count }) => {
        questionShowPage.innerHTML = `
        <h2>${title}</h2>
        <p<${body}</p>
        <small>${like_count}</small>
        <small>Asked by: ${author.full_name}</small>
        <div>
            <button data-action="edit" data-id="${id} href="#">Edit</button>
            <button data-action="delete" data-id="${id} href="#">Delete</button>
        </div>
        `
    })
}

loadQuestions();


