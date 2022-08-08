import React from 'react'
import { NavLink } from 'react-router-dom'
export default function HomePage() {
  return (
    <div id='center'>
        <h1>Fit Trader!</h1>
      <div id='homePage'>
      
      <div  >
        <input id='searchBar' type="text" placeholder="Search for fittnes equipment.." />
        {/* TODO ADD FUNCTIONALITY */}
      </div>
      <div id='search'>
        <button id='serchButton'>Search</button>
        {/* TODO ADD FUNCTIONALITY */}
      </div>
      <div>
       <button id='sellButton'> <NavLink id='sellNav'  to="/create-listing">Add Listing</NavLink></button>
        </div>
        </div>

    </div>
  )
}
