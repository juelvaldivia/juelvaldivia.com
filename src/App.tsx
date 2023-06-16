import React from 'react';
import './App.css';

import About from './components/About';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <About />
      </header>
    </div>
  );
}

export default App;
