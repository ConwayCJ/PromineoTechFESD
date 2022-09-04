import React from 'react'
import StarRating from './StarRating'

export default class Reviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        {this.props.reviews?.map((review, index) => (
          <div key={`${this.props.movieTitle}${index}`}>
            <StarRating 
            stars={review.starRating}
            disabled="true"
            />
            <p>{review.reviewText}</p>
          </div>
        ))}
      </>
    )
  }
}
