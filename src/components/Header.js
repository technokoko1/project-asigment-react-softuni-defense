import React from 'react'

import { NavLink } from 'react-router-dom'

export default function Navigation() {
  
    return (
        <header >
            {/* for all users TODO */}
          <h1><NavLink to="/">HomePage</NavLink></h1>
          <h1><NavLink to="/catalog">Catalog</NavLink></h1>
          {/* for non loged users TODO*/}
          <h1><NavLink to="/login">Login</NavLink></h1>
          <h1><NavLink to="/register">Register</NavLink></h1>
           {/* for loged in users TODO*/} 
          {/* maybe make the profile page button to be the userName */}
          <h1><NavLink to="/profile-page">Profile Page</NavLink></h1>
          <h1><NavLink to="/logout">Logout</NavLink></h1>
          
          </header>
      )
  
}
