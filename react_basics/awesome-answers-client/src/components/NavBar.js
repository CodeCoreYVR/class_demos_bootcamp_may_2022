import React from 'react';
import { Session } from '../requests';
import {NavLink} from 'react-router-dom';

const NavBar = ({ currentUser, onSignOut }) => {
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
                        <NavLink to='questions/new'>Question New</NavLink>
                        -
                        <span>Welcome, { currentUser.first_name }</span>
                        -
                        <button onClick={handleSignOut}>Sign Out</button>
                    </>
                ) : (
                    <NavLink to='sign_in'>Sign In</NavLink>
                )
            }
        </nav>
    )
}

export default NavBar;
