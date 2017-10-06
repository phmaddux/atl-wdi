import React, { Component } from 'react'
import pizzaData from "../pizzaData.js"
import MenuItem from "./MenuItem.jsx"
import "../index.css"

class MenuList extends Component {
    render () {
        
        const items = pizzaData
        
        const menuComponents = items.map((item) => {
            return <MenuItem 
                name={item.name}
                price={item.price}
                image={item.image}
                description={item.description}/>
            })
        return (
            <div className="menu">
                <h1>Menu</h1>
                <div className="menu-container">
                    { menuComponents}
                </div>
            </div>
        )
    }
}

export default MenuList;