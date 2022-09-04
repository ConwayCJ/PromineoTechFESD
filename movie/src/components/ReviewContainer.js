import React from 'react'
// import Reviews from "./Reviews";
import ReviewsList from './ReviewsList'
import ReviewForm from './ReviewForm'

export default class ReviewContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: []
    }
  }

  addReview = (review) => {
    const reviews = this.state.reviews
    reviews.push(review)
    this.setState({ reviews })
  }

  render() {
    return (
      <>
        <ReviewsList movieTitle={this.props.movieTitle} reviews={this.state.reviews} />
        <ReviewForm  updateReviews={this.addReview.bind(this)} />
      </>
    )
  }
}
