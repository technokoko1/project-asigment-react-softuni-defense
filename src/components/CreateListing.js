import React from 'react'
const onSubmit = (e) => {
    e.preventDefault();

    const listingData = Object.fromEntries(new FormData(e.target));

    console.log(listingData);

    //   TODO FINISH SUBBMIT
}
export default function CreateListing() {
    return (<section>
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
