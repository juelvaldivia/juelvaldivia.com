import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import { darkTheme, GlobalStyles } from './styles';

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Juel Valdivia</title>
        <meta name="description" content="Sitio web personal de Juel Valdivia" />
      </Helmet>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
