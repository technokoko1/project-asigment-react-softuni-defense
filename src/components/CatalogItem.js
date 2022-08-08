import React from 'react'
import { Link } from 'react-router-dom';
export default function CatalogItem({ oneEquipment }) {
    return (

        <div id='catalog'>
            <h2 id='centerTitle'>{oneEquipment.title}</h2>
            <div id='catalogImgDiv'> <img id='catalogImg' src={oneEquipment.image} /></div>
            <div id='catalogTextDiv'> <h6>Price:{oneEquipment.price}</h6>

                <Link to={`/catalog/${oneEquipment._id}`} id='detailsBtn'>
                    Details
                </Link>
            </div>
        </div>

    )
}
