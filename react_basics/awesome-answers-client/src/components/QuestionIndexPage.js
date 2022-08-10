import QuestionDetails from "./QuestionDetails";
import { Component } from 'react';

class QuestionIndexPage extends Component {
    render(){
        return(
          <>
            {this.props.list.map((q, i)=> {
              return <QuestionDetails
                key={i}
                title={q.title}
                body={q.body}
                author={q.author}
                created_at={q.created_at}
              />
            })}
          </>
        )
    }
}

export default QuestionIndexPage;
