import React from 'react';
import { Session } from '../requests';
import {NavLink} from 'react-router-dom';
import CurrentDateTime from "./CurrentDateTime";

const NavBar = ({ currentUser, onSignOut, clocksCount }) => {
    const handleSignOut = () => {
        Session.destroy().then(() => {
            onSignOut()
        })
    }
    return(
        <nav>
            <NavLink to='/questions'>Question Index</NavLink>
            |
            {
                currentUser ? (
                    <>
                        <NavLink to='/questions/new'>Question New</NavLink>
                        -
                        <span>Welcome, { currentUser.first_name }</span>
                        -
                        <button onClick={handleSignOut}>Sign Out</button>
                        -
                        <div>{clocksCount && <CurrentDateTime/>}</div>
                    </>
                ) : (
                    <>
                        <NavLink to='/sign_in'>Sign In</NavLink>
                        |
                        <NavLink to='/sign_up'>Sign Up</NavLink>
                    </>
                )
            }
        </nav>
    )
}

export default NavBar;
