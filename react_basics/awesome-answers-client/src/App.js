import './App.css';
import React, { Component } from 'react';
// import CurrentDateTime from './components/CurrentDateTime'
import { Session } from './requests';
import QuestionIndexPage from './components/QuestionIndexPage';
import QuestionShowPage from './components/QuestionShowPage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import NewQuestionPage from './components/NewQuestionPage';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // clocksCount: [1], //an array of something
      user: null
    }
  }

  componentDidMount(){
    Session.create(
      {
        email: "admin@user.com",
        password: '123'
      }
    ).then( fetchedUser => {
      this.setState((state) => {
        return {
          user : fetchedUser
        }
      })
    })
  }
  render(){

    return (
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path='/questions' component={QuestionIndexPage}/>
          <Route exact path='/questions/new' component={NewQuestionPage}></Route>
          <Route exact path='/questions/:id' component={QuestionShowPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
