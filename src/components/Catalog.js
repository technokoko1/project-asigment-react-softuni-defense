import React from 'react'
import CatalogItem from './CatalogItem'
import { useState } from 'react'

export default function Catalog({equipment}) {
    const [searchTerm,setSearchTerm]=useState('')
  function onChange(e) {
    setSearchTerm(e.target.value)
   
  } 
  return (
    <>
    <div id='center'> 
      <div  >
        <input id='searchBar' type="text" placeholder="Search.." onChange={onChange} />
        {/* TODO ADD FUNCTIONALITY */}
      </div>
      <div id='search'>
     
      
      </div>
      </div>
      <div id='catalogItemBoxes'>
      {equipment.length > 0
                ? equipment.filter(
                  (x)=>{
                    if(searchTerm==''){
                      return x
                    }else if(x.title.toLowerCase().includes(searchTerm.toLowerCase())){
                     return x
                    }
              })
              .map(x => <CatalogItem key={x._id} oneEquipment={x} />)
                : <h3 id='catalog'>No articles yet</h3>
            }
            </div>
      </>
  )
}
