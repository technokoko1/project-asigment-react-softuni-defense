import React from 'react'
import {  useParams } from 'react-router-dom';
export default function DetailsPage({equipment}) {
   const {id}=useParams()
    const oneEquipment = equipment.find(x => x._id == id);
   
  return (
    <div id='detailsPage'>
    <h2 id='centerTitle'>{oneEquipment.title}</h2>
    <div id='catalogImgDiv'> <img id='catalogImg' src={oneEquipment.image} /></div>
    <div id='catalogTextDiv'> <h6>Price:{oneEquipment.price}</h6>
    </div>
    <h4 id='detailsDescription'>{oneEquipment.description}</h4>
</div>
  )
}
