// Write chatr code here!

//====FETCH API======>

//GET /messages -> a JSON ARRAY OF MESSAGES
//POST /messages -> A confirmation (creates a message)
//PATCH /messages/:id -> A confirmation (edit message)
//DELETE /messages/:id -> A confirmation (deletes a message)

//GET request
//Calling "fetch" with a URL as its only argument, it will makes
//a GET request to that URL.  It is Asynchronous and returns a promise

fetch("http://localhost:3434/messages")
//fetch returns an object that represents the HTTP response
//you can use the async methods .text() or .json() on the response
//to parse its body.  Make sure to return it from the callback
.then(response => response.json())
// .then(data => console.table(data))
.then(console.table)

//list of messages
const loadMessages = () => {
    fetch("/messages")
    .then(res => res.json())
    .then(messages => {
        const messagesContainer = document.querySelector("#messages");
        let messagesHTML = "";
        messages.forEach(message => {
            messagesHTML += `
            <li>
                ${message.body}
                <i data-id={message.id} class="delete-link">x</i>
            </li>
            `;
        })
        messagesContainer.innerHTML = messagesHTML
    })
}

//refresh list intermittently
const refreshIntervalMsg = 3000;
document.addEventListener("DOMContentLoaded", () => {
    loadMessages();
    setInterval(loadMessages, refreshIntervalMsg)
})

//POST AJAJ req ro create hard code messages
// const fd = new FormData();
// fd.set("body", "Hello World")
// fetch("/messages", {
//     method: "POST",
//     body: fd
// })

fetch("/messages", {
    method: "POST",
    headers: { "Content-type": "application/json"},
    body: JSON.stringify({ body: "Goodbye World"})
})
