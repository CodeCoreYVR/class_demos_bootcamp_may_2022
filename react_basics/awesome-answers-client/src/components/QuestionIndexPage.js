import QuestionDetails from "./QuestionDetails";
import { useState, useEffect } from 'react';
import { Question } from '../requests';
import { Link } from 'react-router-dom';

export default function QuestionIndexPage() {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        Question.index()
        .then((questionsData) => {
            setQuestions(questionsData)
        })
    }, [])
    const deleteQuestion = (id) =>{
        console.log(id)
        //we can't reset the value of state in this way
        // this.state.questions = this.state.questions.filter(q => q.id != id)
        //you can only reset the value by using this.setState()

        setQuestions(
            questions.filter(q => q.id !== id)
        )
    }

    return(
        <>
            <ul>
                {
                questions.map((q,i) => {
                    return <li key={i}>{q.id} - <Link to={`/questions/${q.id}`}>{q.title}</Link> <button onClick={() => { deleteQuestion(q.id) }}>Delete</button> </li>
                })  
                }
            </ul>
        </>
    )
}


