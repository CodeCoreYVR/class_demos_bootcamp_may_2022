import React from 'react';

import {NavLink} from 'react-router-dom';

const NavBar = ({ currentUser }) => {
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
                    </>
                ) : (
                    <NavLink to='sign_in'>Sign In</NavLink>
                )
            }
        </nav>
    )
}

export default NavBar;
