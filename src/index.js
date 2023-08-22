import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
      <html lang="ru" />
    </Helmet>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
