import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from  './MovieCard';
//48872fd8

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=48872fd8";

// const movie1 = {
//     "Title": "Dune",
//     "Year": "2021",
//     "imdbID": "tt1160419",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
// };

const App = ()=>{

    const [Movies , setMovies] = useState([]);
    const[searchTerm , setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data =await response.json();
        setMovies(data.Search);
    }
    // console.log(Movies);
    useEffect(()=>{
        searchMovies('');
    },[]);

    return(
        <div className="app">

            <h1>Movie Mania</h1>

            <div className="search">
                <input placeholder="enter the name" value={searchTerm} onChange={ (e) => setSearchTerm(e.target.value) }/>
                <img src = {SearchIcon} alt="search" onClick={ () => searchMovies(searchTerm) }/>
            </div>
            
            {
                Movies?.length >0 
                ?(

                    <div className="container">
                        {Movies.map((movie)=>(
                            <MovieCard movie={movie} />
                        ))}
                    </div>

                )
                :(
                    <div className="empty">
                        <h2>
                            No Movies found
                        </h2>
                    </div>
                )
            }

            
        </div>
    );
};

export default App;