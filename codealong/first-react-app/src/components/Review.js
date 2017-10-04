import React, { Component } from 'react'

class Review extends Component {

    render () {
        return (
            <div>
                <h3>Reviewer: { this.props.reviewer}</h3>
                <p>Review: {this.props.theReview} </p>
            </div>
        )
    }
}

export default Review