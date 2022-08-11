import QuestionDetails from "./QuestionDetails";
import AnswerList from "./AnswerList";
import { Component } from 'react';
import questionData from '../questionData';
import { Question } from '../requests';

class QuestionShowPage extends Component {
  //two ways to declatr state
  constructor(props){
    super(props);
    this.state = { stateQuestion: {} }
    // this.delete = this.delete.bind(this)
  }

  componentDidMount(){
    console.log(this.props.match.params.id)
    Question.show(this.props.match.params.id) //no more hard copy - display the first that matches. Have access o the params ant the match method through our router
    .then((fetchedAPIquestion) => {
      this.setState((state) => {
        return {
          stateQuestion : fetchedAPIquestion
        }
      })
    })
  }

  // state = {
  //   question: questionData,
  // }

  delete(){

    this.setState({
      question: null
    })
  }

  deleteTheAnswer(id){
    this.setState({
      question: {
        ...this.state.question,
        answers: this.state.question.answers.filter(a => a.id !== id)
      }
    })
  }
  

  render(){
    const question = this.state.stateQuestion
    return(
      <div>
        <QuestionDetails 
          title={question.title}
          body={question.body}
          author={question.author}
          created_at={question.created_at}
          view_count={question.view_count}
          />
          <button onClick={()=>{this.delete()}}>Delete The Question</button>
  
        <AnswerList 
        list={
          question.answers
        }
        deleteTheAnswer={(id) => this.deleteTheAnswer(id)}
         />
  
      </div>
    )
  }
}

export default QuestionShowPage

