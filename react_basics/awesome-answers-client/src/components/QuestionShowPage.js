import QuestionDetails from "./QuestionDetails";
import AnswerList from "./AnswerList";
import { Component } from 'react';

class QuestionShowPage extends Component {
  render(){
    return(
      <div>
        <QuestionDetails 
          title="What is your favourite color?"
          body="Red, Green, Blue, etc."
          author={{ full_name: "Admin User" }}
          created_at={new Date()}
          view_count={100}
        />
  
        <AnswerList list={
          [
            {body: "red", author_name: "Jon", created_at: "2021-10-2"},
            {body: "yellow", author_name: "Bob", created_at: "2022-1-2"},
            {body: "blue", author_name: "Mike", created_at: "2022-3-24"},
          ]
        } />
  
      </div>
    )
  }
}

export default QuestionShowPage

