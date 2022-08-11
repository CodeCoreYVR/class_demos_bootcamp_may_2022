import React, { Component } from 'react';
import { Question } from '../requests';
import NewQuestionForm from './NewQuestionForm';

class NewQuestionPage extends Component {
    constructor(props){
        super(props);
        this.state = { errors: [] };
        this.createNewQuestion = this.createNewQuestion.bind(this)
    }

    createNewQuestion(params) {
        console.log(`Params: ${params.title} ${params.body}`)
        Question.create(params)
        .then((question) => {
            console.log(`question: ${question.errors}`)
            if (question.errors){
                console.log(`QuestionErrors: ${question.errors}`)
                this.setState({errors: question.errors})
            } else {
                //the history prop contains methods used to navigate
                this.props.history.push(`/questions/${question.id}`)
            }
        })
    }

    render(){
        return(
            <div>    
                <NewQuestionForm errors={this.state.errors} submitForm={(params) => this.createNewQuestion(params)} />
            </div>
        )
    }
}

export default NewQuestionPage;


