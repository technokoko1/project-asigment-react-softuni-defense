import React from 'react'
import { useContext } from 'react';
import { EquipmentContext } from '../contexts/EqupmentContext';

import * as equipmentService from '../services/equipmentService';

export default function EditPage() {
    return (
        <section>
            <div id='center'>
                <form id='create'  >
                    {/* TODO ADD FUNCTIONALITY */}
                    <h1>Eddit Equipment</h1>
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
                    >Eddit</button>
                </form>
            </div>
        </section>
        )
  
}
