import React from 'react'
import { NavLink } from 'react-router-dom'
export default function HomePage() {
  return (
    <div id='center'>
        <h1>Fit Trader</h1>
      <div id='homePage'>
      
      <div  >
        <h2>Buy or Sell fittness equipment</h2>
      
      </div>
      <div id='search'>
        <button id='serchButton'> <NavLink id='sellNav'  to="/catalog">Buy</NavLink></button>
      
      </div>
      <div>
       <button id='serchButton'> <NavLink id='sellNav'  to="/create-listing">Sell</NavLink></button>
        </div>
        </div>

    </div>
  )
}
