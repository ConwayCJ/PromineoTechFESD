import React from 'react'
import ReviewContainer from './ReviewContainer.js'

export default class MovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
      {/* Map function that iterates over the API to return the movie/review form/review form for each */}
        {this.props.movies.map((movie, index) => {

          return (
            <div className='container mb-5' key={`${movie.Title}${index}`}>
              <div className="row">
                <div className='card col-sm' key={`postercard${index}`}>
                    <img
                      className='card-img-top posterImage'
                      src={movie.Poster}                      
                      alt={movie.Title}
                    ></img>

                    <div className='card-body text-center'>
                      <small className= 'card-text text-black'>
                        {movie.Title}: <br />
                        Released {movie.Year}
                      </small>
                    </div>
                  </div>                 

                  <div className='col-sm align-self-end' key={`reviewform${index}`}>
                    <ReviewContainer movieTitle={movie.Title}/>
                  </div>
                </div>
              </div>
          )
        })}
      </>
    )
  }
}
