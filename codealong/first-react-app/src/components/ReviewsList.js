import React, { Component } from 'react'
import Review from './Review'

class ReviewsList extends Component {
    render () {
        const reviews = [
            {reviewer: "John Smith", theReview: "Kickstarter Pinterest normcore cred polaroid asymmetrical chambray typewriter before they sold out"},
            {reviewer: "Alex Monna", theReview: "Carles swag"},
            {reviewer: "Musa", theReview: " yr butcher farm-to-table Brooklyn Godard Intelligentsia Marfa flannel"},
            {reviewer: "Manny Manacle", theReview: " wayfarers meggings gluten-free slow-carb mlkshk cornhole leggings bicycle"},
        ]

        const reviewComponents = reviews.map((review) => {
            return <Review reviewer={review.reviewer} theReview={review.theReview}/>
        })
        return(
            <div>
                
            </div>
        )
    }
}

export default ReviewsList