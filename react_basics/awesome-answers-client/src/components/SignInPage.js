import React, { useState } from 'react';
import {Session} from '../requests';

function SignInPage(props){
    const { onSignIn } = props;

    const [errors, setErrors] = useState([])

    function handleSubmit(event){
        event.preventDefault();
        const { currentTarget } = event;
        const formData = new FormData(currentTarget)
        const params = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        Session.create(params).then(data => {
            if (data.status === 404) {
                setErrors([...errors, {message: "Wrong email or password"}])
            }
            else if (data.id){
                onSignIn()
                //Navigate to Index page from the browser
                //We can 'push' on history to manipulate the browser
                //and direct our user to any page in our app
                props.history.push('/questions')
            }
        })
    }

    return(
        <main>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                {errors.length > 0 ? (
                    <div>
                        <h4>Failed to Sign In</h4>
                        <p>{errors.map(error => error.message).join(", ")}</p>
                    </div>
                ) : (
                    ""
                )}

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <input type="submit" value="Sign In" />
            </form>
        </main>
    )
}

export default SignInPage;
