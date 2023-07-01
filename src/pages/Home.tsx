import React from 'react';

import './App.css';

import Welcome from '../components/Welcome';
import About from '../components/About';
import Social from '../components/Social';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <About />
        <Social />
      </header>
    </div>
  );
};

export default Home;
