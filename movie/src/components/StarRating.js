import React from "react";
import '../styles/StarRating.module.css'
import { FaStar} from "react-icons/fa"

export default class StarRating extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      stars: props.stars || 0
    }
  }

  assignRating(rating) {
    if (!!this.props.updateRating) {
      this.props.updateRating(rating)
    }
    this.setState({stars: rating})
  }

  render() {
    return(
      // Map function that returns an array, and populates each spot in the array with a star
      <div className="d-flex justify-content-between align-content-end row-reverse p-2">
          {/* Cant get state to update/render correctly */}
        {[ ...Array(5)].map((star, i) => {
          const ratingValue = i+1
          return (
            <label key={`star${i}`}>
              <input 
              type="radio" 
              name="rating" 
              value={ratingValue} 
              onClick={() => !this.props.disabled && this.assignRating(ratingValue)}
              />
            
              <FaStar 
              className="star" 
              size={25}
              color={ratingValue <= this.state.stars ? "#ffc107" : "#e4e5e9"}
              />
            </label>
          )
        })}
      </div>
    )
  }
 }