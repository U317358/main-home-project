


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovieList, setloading, seterror, } from '../REDUX/slice';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const MovieList = () => {
  const { movies, loading, error,} = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const apiUrl = "http://localhost:4001/movies";
  


const fetchMovieDetails = (movieId) =>{
  navigate(`/booking/${movieId}`)
}
  


  const fetchMovieList = async () => {
    dispatch(setloading()); 
    try {
      const response = await axios.get(apiUrl);
      dispatch(setMovieList(response.data));
    } catch (error) {
      console.error('Error fetching movies:', error);
      dispatch(seterror(error.toString()));
    } 
  };


  useEffect(() => {
    fetchMovieList(); 
  },[dispatch]); 


  if (loading) {
    return <div className="container mt-4">Loading...</div>; 
  }

  if (error) {
    return <div className="container mt-4">Error: {error}</div>; 
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Movie List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Release Date</th>
            <th>IMDB Rating</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.name}</td>
              <td>{movie.release_date}</td>
              <td>{movie.imdb_rating}</td>
              <td>
                <button className="btn btn-primary" onClick={() => fetchMovieDetails(movie.id)}>
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>

     </div>
  );
};

export default MovieList;




