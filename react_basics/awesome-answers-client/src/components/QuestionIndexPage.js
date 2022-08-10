import QuestionDetails from "./QuestionDetails";
import { Component } from 'react';
import questionIndexData from '../questionIndexData';

class QuestionIndexPage extends Component {
    state = {
        questions: questionIndexData
    }
    render(){
        return(
          <>
            {this.state.questions.map((q, i)=> {
              return <QuestionDetails
                key={i}
                title={q.title}
                body={q.body}
                created_at={q.created_at}
              />
            })}
          </>
        )
    }
}

export default QuestionIndexPage;
