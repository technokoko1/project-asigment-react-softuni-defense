import React from 'react'
import { useContext } from 'react';
import { EquipmentContext } from '../contexts/EqupmentContext';

import * as equipmentService from '../services/equipmentService';


export default function CreateListing() {
   
        const { equipmentAdd } = useContext(EquipmentContext);
    
        const onSubmit = (e) => {
            e.preventDefault();
    
            const equipmentData = Object.fromEntries(new FormData(e.target));
    
            equipmentService.create(equipmentData)
                .then(result => {
                    equipmentAdd(result)
                });
        };
    
    return (
    <section>
        <div id='center'>
            <form id='create' onSubmit={onSubmit} >
                <h1>Sell Equipment</h1>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Equipment name..."
                />
                <input
                    type="Number"
                    id="price"
                    name="price"
                    placeholder="Equipment price..."
                    min={1}
                />
                {/* TODO ADD TYPE */}
                <input
                    type="text"
                    id="image"
                    name="image"
                    placeholder="Add picture url here..."
                />

                <input
                    type="text"
                    id="description"
                    name="description"

                    placeholder='Add description here(optional)'

                    defaultValue={""}
                />
                <button type="submit"
                    id="subbmitBtn"
                >Add Listing</button>
            </form>
        </div>
    </section>
    )
}
