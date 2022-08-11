import React from 'react'
import {  useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
export default function DetailsPage({equipment}) {
   const {id}=useParams()
   const data= localStorage.getItem('auth');
   const  user=JSON.parse(data)
    const oneEquipment = equipment.find(x => x._id == id);
      console.log(oneEquipment.owner)
  return (
    <div id='detailsPage'>
    <h2 id='centerTitle'>{oneEquipment.title}</h2>
    <div id='catalogImgDiv'> <img id='catalogImg' src={oneEquipment.image} /></div>
    <div id='catalogTextDiv'> <h6>Price:{oneEquipment.price}</h6>
    {   user._id==oneEquipment.owner 
    ?<>
        <p>
        <Link to={`/catalog/edit/${oneEquipment._id}`} id='EditBtn'>
                    Edit
                </Link>
                </p>
                <p>
                  <button id='DeleteBtn' >Delete</button>
                </p>
                </>
              :<button id='DeleteBtn' >Buy</button> }
    </div>
    <h4 id='detailsDescription'>{oneEquipment.description}</h4>
</div>
  )
}
