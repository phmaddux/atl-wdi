import React, { Component } from 'react'
import "../index.css"

class MenuItem extends Component {
    render () {
        return(
            <div id="menu" className="menu-item">
                    <img className="menu-item-img" src={ this.props.image} alt="Menu Item"/>
                <div className="menu-description">
                    <div className="menu-item-name">{ this.props.name}</div>
                    <div>
                        <strong>Price: { this.props.price}</strong>
                    </div>
                    <div>{ this.props.description}</div>
                </div> 
            </div>
        )
    }
}

export default MenuItem;