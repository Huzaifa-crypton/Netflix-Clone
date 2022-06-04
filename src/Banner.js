import React, { useEffect, useState } from 'react'
import axios from "./axios";
import requests from './requests';
import './Banner.css'
const base_url = "https://image.tmdb.org/t/p/original/";


function Banner() {


    const [movie , setMovie] = useState([]);
    useEffect(()=>{
        async function fetchData(){
          const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
              request.data.results[
                Math.floor(Math.random() * request.data.results.length-1)
              ]
              );
              // console.log(request.data.results[Math.floor(Math.random() * request.data.results.length)])
            return request;
        }
        fetchData();
        
    } , []);

    function truncateString(str, num) {
      if (str?.length > num) {
        return str.slice(0, num) + "...";
      } else {
        return str;
      }
    }
    
    return (
    <header className='banner' style={{backgroundSize:'cover' , backgroundImage: `url(${base_url}${movie?.backdrop_path})` , backgroundPosition: 'center center'}}>
        <div className="banner_contents">
          <h1 className='banner_title'>
            {movie?.name || movie?.title || movie?.original_name}
          </h1>

          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>

          <h1 className='banner_description'>
            {truncateString(movie?.overview,150)}
          </h1>
        
        </div>
        <div className="fade_bottom"></div>
    </header>
  )
}

export default Banner