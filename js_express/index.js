//------------------To create a npm project---------------------->
//Create an empty project directory
//Run nmp init to initialize a project
//Follow the prompts, and press "enter" if all is good
//at the end, type "y" and enter
//This will create a npm project with a package.json file

//------------------Create .gitignore file------------------------->
//This file will hold any information you don't want to share,
//like sensitive info or large libraries like node_modules
//You can use gitignore.io to generate content for the .gitignore file
//You can also: curl https://www.toptal.com/developers/gitignore/api/node,macos,linux,windows > .gitignore
//This will read, copy, and paste into .gitignore

//------------------Install express package-------------------------->
// npm i express
//this will enable us to use the express library and will create node_modules
//and a package-lock.json file

//------------------Create main project file-------------------------->
//create index.js
//this file name should match what your package.json says as "main"
//this file will hold all the information in order for our project to function

//------Require the express library from the express dependency------>
const express = require('express');
// const res = require('express/library/response');
const app = express();

// Require method-override middleware
// npm i method-override
// This enables client to make HTTP request with forms that are not
// just GET or POST requests (DELETE, PATCH, etc)
const methodOverride = require('method-override'); 

//--------------------BODY PARSER and URLENCODED MIDDLEWARE-------------------->
//To be able to use data from a POST HTTP request, like filling out a form and submitting:
//Previously we had to add body parser as an extra package but we don't need to install body parser anymore, 
//because express has a new method called urlencoded that we'll use instead to parse in x-www-urlencoded format
//Forms using POST actions send their data as x-www-urlencoded format
//It looks like key=value separated by & and + where special characters are replaced 
//This middleware will decode (parse out) the data that was submitted from the form
//using  the "POST" HTTP Verb and change it into a format the our application can understand
//such as JavaScript objects that will represent request.body

//When "extended" option is "true", it allows the data to take the shape of arrays and objects
//And puts all the info on req.body.  Without it, you will only get strings back 
//the method has other options available as well that we don't need today
app.use(express.urlencoded({extended: true}))
//It will modify the request object given to routes by adding a property to it named body
//So request.body will be an object containing the data from our form

//-----------------Method Override Middleware--------------------------
app.use(methodOverride((req,res) => {
    if (req.body && req.body._method) {
        const method = req.body._method;
        return method
    }
}))

//------Cookie Parser------>
//req.body.cookie
//install: npm i --save cookie-parser
//require cookie-parser:
const cookieParser = require('cookie-parser')

app.use(cookieParser())
//will parse cookies and put them on request.cookies available as express properties (see express docs)
//you can still require cookies without this, but in the backend it's hard for us to read
//every time we make a request to the browser, in the header somewhere there's a cookie header that holds all the info for that cookie
//cookie parser reads the headers for us and it will parse out the cookies
//it will read it in whatever format it is, and turns it into a nice JS object for us

//------Custom Middleware-------->
app.use((req, res, next) => {
    const username = req.cookies.username

    //res.locals are properties set and are available in any views
    //almost like a global variable
    res.locals.username = '';

    if(username){
        res.locals.username = username;
        console.log(`Signed in as ${username}`)
    }
    next();
    // All middleware functions have an optional parameter **next()** 
    //beside (request, response) parameters which is needed to pass along 
    //the request to the next function in the chain just simply by calling it
    //Packaged middleware might already have the next() implemented, so you might not need to specify it
    //But always include it in your own middleware
    //After the we are done with the middleware then we pass the request to next 
    //middleware function but, if the middleware didn't run successfully then the 
    //response will be given from the middleware
})

//-----STATIC ASSETS-------->
//Static asset: require path that's already accessible through express
//In turn we will use express.static through the path
const path = require('path')

//Use 'path.join' to combine string arguments into path
//path.join('/', 'users', 'bob') -> '/users/bob'

//The below line connects our public directory to express so that it can
//serve the browser those images, css files, browser-side JS files, etc
//Set up a public directory for these files to reside in
app.use(express.static(path.join(__dirname, 'public')));
//__dirname is a global variable provided by node that has the value of the path to your root directory

//static asset middleware will take all the files and directories within /public
//and serve them publically with their own url
//For example: http://localhost:3000/images/thumbsUp.gif
//or http://localhost:3000/css/main.css

//Logging Middleware----->
//install morgan in our npm project: npm i morgan
//now require it:
const logger = require('morgan');
const req = require('express/lib/request');
app.use(logger('dev'));

//------Common methods for App (express app)----->
// http://expressjs.com/en/4x/api.html#app.listen
//require('express') returns a function that returns an instance of an express app
//The app variable referenced in index.js is an object with methods to configure your app

//app.use() -> initializes middleware
//app.engine() -> to set the view engine of express
//app.listen() -> to start the express server

//app.get() -> to listen for a GET request
//app.post() -> to listen for a POST request
//app.put() -> to listen for a PUT request
//app.patch() -> to listen for a PATCH request
//app.delete() -> to listen for a DELETE request

//app.method -> method is just a generic variable for any HTTP request types
// supported by express and includes app.get, app.post, etc.

//app.set() used to set application variables. Mainly used to configure application wide variables
// like a patrh to VIew directory or path to static files

//-----------------------------HTTP VERBS---------------------------------->
//GET -> to retreive info from our server (generalization)
//POST -> req to either add or change to our server's data
//PATCH -> Update data
//DELETE -> Remove data

//---------------------------ROUTERS--------------------------------->
//Root page
app.get('/', (request, response) => {
    // response.send("<h1>This is my root page! Hi There :) </h1>")
    response.render('welcome', {
        title: 'Welcome to Our Meme Page',
        memes: [
            "https://www.probytes.net/wp-content/uploads/2018/01/2.jpg",
            "https://www.probytes.net/wp-content/uploads/2018/01/20.png",
            "https://www.probytes.net/wp-content/uploads/2018/01/r_389776_tqMPa-1.jpg",
            "https://www.loginradius.com/blog/async/static/ce430bf1882a235044353d4b4d098275/e85cb/12.png",
            "https://res.cloudinary.com/practicaldev/image/fetch/s--MOKp0Jew--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.probytes.net/wp-content/uploads/2018/01/4-1.png"
        ]
    })
})

//DEMO HELLO WORLD
//first argument: path
//second argument: request handler
app.get('/hello_world', (request, response) => {
    // response.send("<h1>Hello World</h1>")
    response.render('hello_world')
})

//SURVEY PAGE
app.get('/survey', (req, res) => {
    res.render('survey')
})

//----Handle Submit of Survey Page---->
app.get('/submit', (req,res) => {
    // res.send('thank you')
    // `response.send(...)` is helpful when debugging if you
	// see the contents of object in your browser. Use it
	// like you would use `console.log(...)`
	// response.send(request.query);
    // `request.query` is a property that holds an object
	// representation of the URL query.
    const fullName = req.query.fullName;
    const favouriteColour = req.query.favouriteColour;
    const favouriteDay = req.query.favouriteDay;
    const message = req.query.message
    res.render('thank_you', {
        fullName: fullName,
        favouriteColour: favouriteColour,
        favouriteDay: favouriteDay,
        message: message
    })
})

//'----------Sign in POST request-------->
app.post('/sign_in', (req, res) =>{
    // res.send(req.body)   //-> this is available through urlencoded
    const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 // a day in milliseconds
    const username = req.body.username
    res.cookie('username', username, {maxAge: COOKIE_MAX_AGE})
    res.redirect('/')
})

//'----------Sign in POST request-------->
app.post('/sign_out', (req, res) =>{
    res.clearCookie('username')
    res.redirect('/')
})

// ---------------POST ROUTER ACCESSING POST ROUTES-----------
const postRouter = require('./routes/posts');
app.use('/posts', postRouter)

//SET VIEW ENGINE---->
//first "npm i ejs" to add ejs as a dependency to the project
//make sure you have the necessary extensions on VSCode

//here we are telling express to render templates using ejs
app.set('view engine', 'ejs')
//Create a views directory to refer to all our views
//let express know that should find the templates inside views folder
app.set('views', 'views')

//---------------------------SERVER--------------------------------->

//Add nodemon dependency and add as start script in package.json to avoid
//restarting the server every time a JS file is changed
//npm install -D nodemon
//add to script in package.json
//To start server:
//npm start

//---Start listening to the server----->
const PORT = 3000;
const DOMAIN = "localhost" //loopback address: 127.0.0.1

app.listen(PORT, DOMAIN, () => {
    console.log(`Server is listening on http://${DOMAIN}:${PORT}`)
})


