import './App.css';
import React, { useState, useEffect } from 'react';
import CurrentDateTime from './components/CurrentDateTime'
// import { Session } from './requests';
import QuestionIndexPage from './components/QuestionIndexPage';
import QuestionShowPage from './components/QuestionShowPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import NewQuestionPage from './components/NewQuestionPage';
import { User } from './requests';
import SignInPage from './components/SignInPage';
import AuthRoute from './components/AuthRoute';
import SignUpPage from './components/SignUpPage';
import UseStateHook from "./components/UseStateHook";
import UseEffectHook from "./components/UseEffectHook";
import NotFoundPage from './components/NotFoundPage';
import GiftPage from "./components/GiftPage";


export default function App() {
  const [ user, setUser ] = useState(null)
  const [clocksCount, setClocksCount] = useState(true)


  // componentDidMount(){
  //   this.getCurrentUser()
  // }
  useEffect(() => {
    getCurrentUser();
  }, [])
  

  const getCurrentUser = () => {
    return User.current().then(user => {

      if (user?.id){
        setUser(user)
      }
    })
  }

  const onSignOut = () => { setUser( null )}

  

    return (
      <BrowserRouter>
        <NavBar currentUser={user} onSignOut={onSignOut} clocksCount={clocksCount} />
        <Switch>
          <Route exact path='/sign_in'
          render={(routeProps) => <SignInPage {...routeProps} onSignIn={getCurrentUser} />}
          >
          </Route>
          <Route exact path='/sign_up'
          render={(routeProps) => <SignUpPage {...routeProps} onSignUp={getCurrentUser} />}
          ></Route>
          <Route exact path='/questions' component={QuestionIndexPage}/>
          <AuthRoute isAuthenticated={!!user} exact path='/questions/new' component={NewQuestionPage} />
          <Route exact path='/questions/:id' component={QuestionShowPage}></Route>
          <Route path='/use_state' component={UseStateHook} />
          <Route path='/use_effect' component={UseEffectHook} />
          <Route path='/gift/:id' component={GiftPage}/>
          <Route component={NotFoundPage}></Route>
        </Switch>
      </BrowserRouter>
    );
  
}


