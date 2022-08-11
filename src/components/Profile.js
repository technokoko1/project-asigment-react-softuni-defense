import React from 'react'
import CatalogItem from './CatalogItem'
import { useState } from 'react'
export default function Profile({ equipment }) {
  const data= localStorage.getItem('auth');
 const  user=JSON.parse(data)
  return (
    (
      <>
        <div id='center'>

      <h1>Your listings</h1>
        </div>
        <div id='catalogItemBoxes'>
          {equipment.length > 0
                ? equipment.filter(
                  (x)=>{
                    if(x.owner==user._id){
                   
                      return x
                    }
                    
              })
              .map(x => <CatalogItem key={x._id} oneEquipment={x} />)
                : <h3 id='catalog'>No listings yet</h3>
            }
        </div>
      </>
    )
  )
}
