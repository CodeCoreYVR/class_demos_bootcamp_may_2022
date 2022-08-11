import './App.css';
import React, { Component } from 'react';
// import CurrentDateTime from './components/CurrentDateTime'
import { Session } from './requests';
import QuestionIndexPage from './components/QuestionIndexPage';
import QuestionShowPage from './components/QuestionShowPage';


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
      <>
        <QuestionShowPage/>
      </>
    );
  }
}

export default App;
