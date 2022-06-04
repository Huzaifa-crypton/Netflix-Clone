import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import "./Row.css";
import ReactPlayer  from "react-player";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      // console.log(movies);
      return request;
    }
    fetchData();
  },[fetchURL]);
  const handleClick = (movie)=>{
    if (trailerURL) {
      setTrailerURL('');
    }
    else{
      movieTrailer(movie?.name || "")
      .then((url)=>setTrailerURL(url))
      .catch((error)=>console.log(error));
    }
  }
  return (
    
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
 
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick ={()=>handleClick(movie)}
            className={`row_poster  ${isLarge && "row_poster_large"}`}
            src={`${base_url}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerURL && <ReactPlayer url={trailerURL} width="100%" />}
     
    </div>

  );
}

export default Row;
