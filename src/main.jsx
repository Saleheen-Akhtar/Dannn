import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/global.css';

const rootElement = document.getElementById('root');

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

if (rootElement && rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, app);
} else if (rootElement) {
  ReactDOM.createRoot(rootElement).render(app);
}
