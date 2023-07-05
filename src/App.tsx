import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import { darkTheme, GlobalStyles } from './styles';
import { createContext } from './common';
import { CoreApp } from './core/app';

const coreApp = new CoreApp('memory');
const [CoreAppContext, useCoreAppContext] = createContext<CoreApp>();
export const useCoreApp = useCoreAppContext;

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Juel Valdivia</title>
        <meta name="description" content="Web personal de Juel Valdivia" />
      </Helmet>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Router>
          <CoreAppContext.Provider value={coreApp}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </CoreAppContext.Provider>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
