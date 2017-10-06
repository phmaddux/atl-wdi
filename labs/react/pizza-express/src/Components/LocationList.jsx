import React, { Component } from 'react'
import locationData from "../locationData.js"
import Location from "./Location.jsx"
import "../index.css"

class LocationList extends Component {
    render () {

        const places = locationData
        
        const locationComponents = places.map((place) => {
            return <Location 
                name={place.name}
                address={place.address}
                phone={place.phone}/>
            })
        return (
            <div id="locations">
                <h1>Locations</h1>
                <div className="locations">
                    { locationComponents}
                </div>
            </div>
        )
    }
}

export default LocationList;