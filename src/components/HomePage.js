import React from 'react'

export default function HomePage() {
  return (
    <div id='center'>
      <h1 >
      Welcome to Fit-Trader!<br></br>
       Biggest website to buy and sell used fitness equipment!
        </h1>
        <h2>Search for ussed fittnes equipment</h2>
         <div > 
        <input id='searchBar' type="text" placeholder="Search.."/>
        
        </div>
        <div id='search'>
          <button id='serchButton'>Search</button>
        </div>
        
      </div>
  )
}
