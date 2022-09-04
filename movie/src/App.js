import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MovieList from './components/MovieList'
import Navigation from './components/Navigation'
import { useEffect, useState } from 'react';


const App = () => {

  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')

    const getMovieRequest = async (searchValue) => {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=7a5d2d70`

      const response = await fetch(url)
      const responseJson = await response.json()

      if(responseJson.Search) {
        setMovies(responseJson.Search)
      }

    }

    useEffect(() => {
      getMovieRequest(searchValue);
    }, [searchValue])

  return (
    <>
      <Navigation searchValue={searchValue} setSearchValue={setSearchValue}/>

      <div className='container-fluid movieApp'>
          <div className='row'>
            <MovieList movies={movies} />
          </div>
      </div>    
    </>
  );
}

export default App;
