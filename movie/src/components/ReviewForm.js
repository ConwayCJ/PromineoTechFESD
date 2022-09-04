import React from "react";
import StarRating from "./StarRating";

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewText: '',
      starRating: 1,
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // Create review from form data
    const review = {
      starRating: this.state.starRating,
      reviewText: this.state.reviewText,
    }
    // Put review in state
    this.props.updateReviews(review)
  }

  handleReviewChange = (event) => {
    this.setState({reviewText: event.target.value})
  }

  handleRatingChange = (starRating) => {
    this.setState({starRating})
  }
  
  render() {
    return(
      <div className="form-control text-center">
      <form onSubmit={this.handleSubmit}>
        <textarea 
        className="form-control"
        type="text" 
        placeholder="Enter a review" 
        value={this.state.reviewText}
        onChange={this.handleReviewChange}
        />
        <StarRating updateRating={this.handleRatingChange.bind(this)}/>
        <button className="btn btn-secondary" type="submit">Submit</button>
      </form>

    </div>
    )
  }

}