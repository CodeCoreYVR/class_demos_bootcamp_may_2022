import React from 'react';
import FormErrors from './FormErrors';

const NewQuestionForm = props => {
    
    const getDataAndSubmit = (event) => {
        //get the form data
        //pass it into the function from the props
        //props.submitForm
        event.preventDefault();
        const fd = new FormData(event.currentTarget);
        console.log(fd.get("title"), fd.get("body"))
        props.submitForm(
            {
                title: fd.get("title"),
                body: fd.get("body"),
                created_at: new Date(),
                id: 5
            }
        )

        event.currentTarget.reset()

    }

    return(
        <form onSubmit={getDataAndSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <br />
                <input type="text" name="title" id="" />
                <FormErrors forField="title" errors={props.errors} />
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <br />
                <input type="text" name="body" id="" />
                <FormErrors forField="body" errors={props.errors} />
            </div>
            <div>
                <input type="submit" value="Create Question" />
            </div>
            
        </form>
    )


}

export default NewQuestionForm;
