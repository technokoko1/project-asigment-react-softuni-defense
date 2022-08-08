import React from 'react'
import { useContext } from 'react';


import { AuthContext } from '../contexts/AuthConext';
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <header className="headerWrap" >
            {/* for all users TODO */}
            <ul>
            {<li id='userEmail'>{user.email}</li>}
            <li><NavLink to="/">HomePage</NavLink></li>
          <li><NavLink to="/catalog">Catalog</NavLink></li>
         { user.email
         ?<>
          <li><NavLink to="/create-listing">Create Listing</NavLink></li>
          <li><NavLink to="/profile-page">Profile Page</NavLink></li>
          <li><NavLink to="/logout">Logout</NavLink></li>
          </>
          : <>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/register">Register</NavLink></li>
          </>
          }
          </ul>
          </header>
      )
  
}
