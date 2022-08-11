import './App.css';
import React, { Component } from 'react';
import CurrentDateTime from './components/CurrentDateTime'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      clocksCount: [1] //an array of something
    }
  }
  render(){

    return (
      <div>
        {
          this.state.clocksCount.map((c,i) => {
            return <CurrentDateTime key={i} shouldShowTime={true}/>
          })
        }
      </div>
    );
  }
}

export default App;
