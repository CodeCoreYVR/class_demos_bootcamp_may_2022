import QuestionDetails from "./QuestionDetails";
import AnswerList from "./AnswerList";
import { useState, useEffect } from 'react';
import questionData from '../questionData';
import { Question } from '../requests';

export default function QuestionShowPage(props) {
  
  const [ question, setQuestion] = useState({})


    useEffect(() => {
      
      console.log(props.match.params.id)
      Question.show(props.match.params.id) //no more hard copy - display the first that matches. Have access o the params ant the match method through our router
      .then((fetchedAPIquestion) => {
        setQuestion(fetchedAPIquestion)
      })
    }, [])
    
  

  // state = {
  //   question: questionData,
  // }

  // delete(){

  //   this.setState({
  //     question: null
  //   })
  // }

  const deleteTheAnswer = id => {
    const {answers, ...rest} = question;
    setQuestion({
      
        answers: answers.filter(a => a.id !== id),
        ...rest
      
    })
  }
  

  
    const { title, body, author, view_count, created_at } = question
    return(
      <div>
        <QuestionDetails 
          title={title}
          body={body}
          author={author}
          created_at={created_at}
          view_count={view_count}
          />
          {/* <button onClick={()=>{delete()}}>Delete The Question</button> */}
  
        <AnswerList 
        list={
          question.answers
        }
        deleteTheAnswer={(id) => deleteTheAnswer(id)}
         />
  
      </div>
    )
  
}



