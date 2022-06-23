//------------------To create a npm project---------------------->
//Create an empty project directory
//Run nmp init to initialize a project
//Follow the prompts, and press "enter" if all is good
//at the end, type "y" and enter
//This will create a npm project with a package.json file

//------------------Create .gitignore file------------------------->
//This file will hold any information you don't want to share,
//like sensitive info or large librarie4s like node_modules
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

//Logging Middleware----->
//install morgan in our npm project: npm i morgan
//now require it:
const logger = require('morgan');
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
    response.send("<h1>Hello World</h1>")
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
    res.render('thank_you', {
        fullName: fullName,
        favouriteColour: favouriteColour,
        favouriteDay: favouriteDay
    })
})

//SET VIEW ENGINE---->
app.set('view engine', 'ejs')
app.set('views', 'views')

//---Start listening to the server----->
const PORT = 3000;
const DOMAIN = "localhost" //loopback address: 127.0.0.1

app.listen(PORT, DOMAIN, () => {
    console.log(`Server is listening on http://${DOMAIN}:${PORT}`)
})


