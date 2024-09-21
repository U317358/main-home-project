





import React from 'react';
import encanto from '../images/encanto.jpeg';
import moana from '../images/moana.jpeg';
import wish from '../images/wish.jpg';
import christmas from '../images/christmas.jpg';
import elona from '../images/elona.webp';
import picture from '../images/picture.jpg';

const HOME = () => {
  return (
    <div className="container text-center" style={{ padding: '20px' }}>
      <div>
        <img src={picture} alt="Cinema" className="img-fluid" />
      </div>
      <div style={{ margin: '20px 0', fontStyle: 'italic' }}>
        Welcome to CINEMA PLAZA, your ultimate destination for all things movies and events. Dive into a world of cinematic excellence with our comprehensive movie database, featuring the latest blockbusters, timeless classics, and indie gems. Explore detailed movie synopses, cast and crew information, and insightful reviews to help you decide what to watch next. Our event section is your go-to source for discovering exciting local and global events. From film festivals and red carpet premieres to live concerts and theater performances, we bring you all the latest updates and ticket information. Whether you're a movie buff looking to explore new releases or an event enthusiast eager to find the next big show, [Your Website Name] is your one-stop hub for entertainment. Join our community of film and event lovers today and stay updated with the latest happenings in the world of entertainment!
      </div>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
          <li data-target="#myCarousel" data-slide-to="4"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={encanto} className="d-block w-100" alt="Encanto" style={{ maxHeight: '500px' }} />
          </div>
          <div className="carousel-item">
            <img src={moana} className="d-block w-100" alt="Moana" style={{ maxHeight: '500px' }} />
          </div>
          <div className="carousel-item">
            <img src={wish} className="d-block w-100" alt="Wish" style={{ maxHeight: '500px' }} />
          </div>
          <div className="carousel-item">
            <img src={elona} className="d-block w-100" alt="Elona" style={{ maxHeight: '500px' }} />
          </div>
          <div className="carousel-item">
            <img src={christmas} className="d-block w-100" alt="Christmas" style={{ maxHeight: '500px' }} />
          </div>
        </div>

        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default HOME;


