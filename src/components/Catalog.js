import React from 'react'
import CatalogItem from './CatalogItem'
export default function Catalog({equipment}) {

  //TODO FIX NO ARTICLES
  return (
    <>
    <div id='center'> 
      <div  >
        <input id='searchBar' type="text" placeholder="Search for fittnes equipment.." />
        {/* TODO ADD FUNCTIONALITY */}
      </div>
      <div id='search'>
        <button id='serchButton'>Search</button>
        {/* TODO ADD FUNCTIONALITY */}
      </div>
      </div>
      <div id='catalogItemBoxes'>
      {equipment.length > 0
                ? equipment.map(x => <CatalogItem key={x._id} oneEquipment={x} />)
                : <h3 id='catalog'>No articles yet</h3>
            }
            </div>
      </>
  )
}
