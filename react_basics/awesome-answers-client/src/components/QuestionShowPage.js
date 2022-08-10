import QuestionDetails from "./QuestionDetails";
import AnswerList from "./AnswerList";
import { Component } from 'react';
import questionData from '../questionData';

class QuestionShowPage extends Component {
  //two ways to declatr state
  constructor(props){
    super(props);
    this.state = questionData
  }

  // state = {
  //   question: questionData,
  // }
  

  render(){
    return(
      <div>
        <QuestionDetails 
          title={this.state.title}
          body={this.state.body}
          author={this.state.author.full_name}
          created_at={this.state.created_at}
          view_count={this.state.view_count}
        />
  
        <AnswerList list={
          this.state.answers
        } />
  
      </div>
    )
  }
}

export default QuestionShowPage

