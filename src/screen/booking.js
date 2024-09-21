

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedMovies, setloading, seterror } from "../REDUX/slice";
import axios from 'axios';

const HandleBooking = () => {
  const { movieId } = useParams();
  const { SelectedMovies, error, loading } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  
  const [bookingStatus, setBookingStatus] = useState(null);
  
  const apiUrlSelected = "http://localhost:3009/movies";
  
  useEffect(() => {
    const fetchMovieDetails = async (id) => {
      dispatch(setloading());
      try {
        const response = await axios.get(`${apiUrlSelected}/${id}`);
        dispatch(setSelectedMovies(response.data));
      } catch (error) {
        if (error.response) {
          console.error('Error response:', error.response);
        } else if (error.request) {
          console.error('Error request:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
        dispatch(seterror(error.toString()));
      }
    };

    fetchMovieDetails(movieId);
  }, [dispatch, movieId]);

  const handleBooking = () => {
    setBookingStatus("Booking successful");
  };

  if (loading) {
    return <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>Loading...</div>;
  }

  if (error) {
    return <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>Error: {error}</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Booking Page</h1>
      <p className="text-center">Booking for movie ID: {movieId}</p>

      {SelectedMovies && (
        <div className="card mx-auto" style={{ maxWidth: '600px' }}>
          <div className="card-body">
            <h5 className="card-title">{SelectedMovies.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Release Date: {SelectedMovies.release_date}</h6>
            <p className="card-text"><strong>IMDB Rating:</strong> {SelectedMovies.imdb_rating}</p>
            <p className="card-text"><strong>Genre:</strong> {SelectedMovies.genre}</p>
            <p className="card-text"><strong>Director:</strong> {SelectedMovies.director}</p>
            <p className="card-text"><strong>Cast:</strong> {SelectedMovies.cast}</p>
            <p className="card-text"><strong>Plot Summary:</strong> {SelectedMovies.plot_summary}</p>
            <button className="btn btn-primary" onClick={handleBooking}>
              Book
            </button>
          </div>
        </div>
      )}

      {bookingStatus && (
        <div className="alert alert-success mt-4 text-center">
          <h4>Booking Status: {bookingStatus}</h4>
        </div>
      )}
    </div>
  );
};

export default HandleBooking;
