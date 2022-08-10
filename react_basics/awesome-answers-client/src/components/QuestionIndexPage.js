import QuestionDetails from "./QuestionDetails";
import { Component } from 'react';
import questionIndexData from '../questionIndexData';

class QuestionIndexPage extends Component {
    state = {
        questions: questionIndexData
    }
    deleteQuestion(id){
        console.log(id)
        //we can't reset the value of state in this way
        // this.state.questions = this.state.questions.filter(q => q.id != id)
        //you can only reset the value by using this.setState()

        this.setState({
            questions: this.state.questions.filter(q => q.id != id)
        })
    }
    render(){
        return(
          <ul>
            {
              this.state.questions.map((q,i) => {
                return <li key={i}>{q.id} - {q.title} <button onClick={() => { this.deleteQuestion(q.id)}}>Delete</button></li>
              })  
            }
          </ul>
        )
    }
}

export default QuestionIndexPage;
