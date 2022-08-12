
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';


import * as equipmentService from '../services/equipmentService';

export default function EditPage({reloadState}) {
    const [currentEquipment, setCurrentEquipment] = useState({});
    const { equipmentId } = useParams();
    const navigate = useNavigate();
//

    useEffect(() => {
        equipmentService.getOne(equipmentId)
            .then(data => {
                
                setCurrentEquipment(data);
            })
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target));
        
        equipmentService.edit(equipmentId, data)
        .then(result => {
           
            navigate(`/catalog`)
            reloadState()
        });
    };

    return (
        <section>
            <div id='center'>
                <form id='create' onSubmit={onSubmit}   >
                    {/* TODO ADD FUNCTIONALITY */}
                    <h1>Eddit Equipment</h1>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Equipment name..."
                        defaultValue={currentEquipment.title}
                    />
                    <input
                        type="Number"
                        id="price"
                        name="price"
                        placeholder="Equipment price..."
                        min={1}
                        defaultValue={currentEquipment.price}
                    />
                    {/* TODO ADD TYPE */}
                    <input
                        type="text"
                        id="image"
                        name="image"
                        placeholder="Add picture url here..."
                        defaultValue={currentEquipment.image}
                    />
    
                    <input
                        type="text"
                        id="description"
                        name="description"
    
                        placeholder='Add description here(optional)'
    
                        defaultValue={currentEquipment.description}
                    />
                    <button  type="submit"
                        id="subbmitBtn"
                    >Eddit</button>
                </form>
            </div>
        </section>
        )
  
}
