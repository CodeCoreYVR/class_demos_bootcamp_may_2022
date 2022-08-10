import QuestionDetails from "./QuestionDetails";
import AnswerList from "./AnswerList";
import { Component } from 'react';
import questionData from '../questionData';

class QuestionShowPage extends Component {
  //two ways to declatr state
  constructor(props){
    super(props);
    this.state = { question: questionData }
    // this.delete = this.delete.bind(this)
  }

  // state = {
  //   question: questionData,
  // }

  delete(){

    this.setState({
      question: null
    })
  }
  

  render(){
    return(
      <div>
        <QuestionDetails 
          title={this.state.question.title}
          body={this.state.question.body}
          author={this.state.question.author.full_name}
          created_at={this.state.question.created_at}
          view_count={this.state.question.view_count}
          />
          <button onClick={()=>{this.delete()}}>Delete The Question</button>
  
        <AnswerList list={
          this.state.question.answers
        } />
  
      </div>
    )
  }
}

export default QuestionShowPage

