import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Juel Valdivia</title>
        <meta name="description" content="Sitio web personal de Juel Valdivia" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
