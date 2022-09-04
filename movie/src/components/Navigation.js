import React from "react"

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return(
      <>
          {/* Nav Component */}
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="navbar-nav mr-auto">
            {/* Search Function to display movies */}
            
            <li className="nav-item">
              <input 
              className="form-control" 
              value={this.props.value} 
              onChange={(event)=> this.props.setSearchValue(event.target.value)}  
              type="search"
              placeholder="Type to search"></input>
            </li>

            {/* Buttons that aren't active yet :) */}
            <li className="nav-item">
              <a className="nav-link" href="localhost:3000">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="localhost:3000">Favorites</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="localhost:3000">TV Shows</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="localhost:3000">Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link bg-success" href="localhost:3000">Sign In</a>
            </li>
          </ul>
        </nav>
            {/* Jumbrotron/header */}
        <section className="jumbotron p-2 bg-info mb-4 text-center">          
            <h1 className="display-4 ">Welcome</h1>
            <p>Search, Rate, Review, and more with many popular movies</p>
            <hr className="my-4"></hr>
            <h3 className="text-center">Create an account to save favorites, personal watchlist and more</h3>
            <p className="lead text-center">
              <a className="btn btn-secondary btn-lg" href="localhost:3000" alt="make account" role="button">Sign Up</a>
            </p>         
        </section>
      </>
    )
  }
}