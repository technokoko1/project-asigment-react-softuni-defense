import React from 'react'

import { NavLink } from 'react-router-dom'

export default function Navigation() {
  
    return (
        <header class="headerWrap" >
            {/* for all users TODO */}
            <ul>
          <li><NavLink to="/">HomePage</NavLink></li>
          <li><NavLink to="/catalog">Catalog</NavLink></li>
          {/* for non loged users TODO*/}
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/register">Register</NavLink></li>
           {/* for loged in users TODO*/} 
          {/* maybe make the profile page button to be the userName */}
          <li><NavLink to="/profile-page">Profile Page</NavLink></li>
          <li><NavLink to="/logout">Logout</NavLink></li>
          </ul>
          </header>
      )
  
}
