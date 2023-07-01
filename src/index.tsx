import React from 'react';
import ReactDOM from 'react-dom/client';
import { hydrate } from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const App = React.lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const rootElement = document.getElementById('root');

if (rootElement && rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
