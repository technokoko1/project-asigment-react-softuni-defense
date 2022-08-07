import React from 'react'
import { NavLink } from 'react-router-dom'
export default function HomePage() {
  return (
    <div id='center'>
      
      <div id='homePage'>
      <h1 >
        Welcome to Fit-Trader!
      </h1>
      <h2>Search for ussed fittnes equipment</h2>
      <div  >
        <input id='searchBar' type="text" placeholder="Search.." />
        {/* TODO ADD FUNCTIONALITY */}
      </div>
      <div id='search'>
        <button id='serchButton'>Search</button>
        {/* TODO ADD FUNCTIONALITY */}
      </div>
      <h2>Or sell your old one!</h2>
      <div>
       <button id='sellButton'> <NavLink id='sellNav'  to="/create-listing">Sell</NavLink></button>
        </div>
        </div>

    </div>
  )
}
