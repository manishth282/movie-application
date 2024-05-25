
import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";
import Pagination from './Pagination';
const url = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const apiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";

// const API_URL = "http://www.omdbapi.com?apikey=f370b2c0";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  function callAppFunction(pageNo){
    setPageNo(pageNo);
  }

  function getAllMovies(){
    axios.get(apiUrl+pageNo).then(
      (response)=>{
        // console.log(response.data.results)
        setMovies(response.data.results)
      }
    ).catch(
      (error)=>{
        console.log(error)
      });
  }

  const searchMovies = async (searchTerm) => {
    const response = await fetch(url+searchTerm+'&page='+pageNo);
    const data = await response.json();
    // console.log(data.results)
    // console.log(url+searchTerm+'&page='+pageNo);
    setMovies(data.results);
  };

  useEffect(() => {
    if(searchTerm ===""){
      getAllMovies();
    }else{
      searchMovies(searchTerm);
    }
  }, [pageNo]);

  return (
    <div className="app">
      <h1 onClick={()=>{setSearchTerm("");setPageNo(1);getAllMovies}} style={{cursor:'pointer'}}>MovieWorld</h1>

      <div className="search">
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"/>
        <img src={SearchIcon} alt="search"
          onClick={() => {setPageNo(1); searchMovies(searchTerm)}}/>
      </div>
      
      <div className="pagination" style={{width:'85%',margin:'0px'}}>
        <Pagination parentFunction={callAppFunction} pageNo={pageNo}/>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
      
      <div className="lowerPagination">
        <Pagination parentFunction={callAppFunction} pageNo={pageNo}/>
      </div>
    </div>
  );
};

export default App;