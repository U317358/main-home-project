


import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HOME from './screen/home';
import MovieList from './screen/movieList';
import EventList from './screen/EventList';
import HandleBooking from './screen/booking';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            CINEMA PLAZA
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/eventlist">
                  EVENTLIST 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movieList">
                  Movies
                </Link>
              </li>  
            </ul>
          </div>
        </div>
      </nav>
      
     


        
      <Routes>
        <Route path="/home" element={<HOME />} />
        <Route path="/movieList" element={<MovieList />} />
        <Route path="/eventlist" element={<EventList />} />
        <Route path="/booking/:movieId" element={<HandleBooking/>}/>
      </Routes>
    </div>
    
  );
  }


export default App;




