import React from 'react';
import Navigation from '../assets/components/Navigation';
import '../App.css';

function Home() {
  return (
    <div className="hoods">
      <div className="top-nav">
        <Navigation />
      </div>
      <div className="center-loader">
      <span className="loader"></span>
      <h1 className='name'>MySoft.ge </h1>
      </div>
    </div>
  );
}

export default Home;
