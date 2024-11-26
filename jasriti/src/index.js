import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Jas from '../src/components/jas.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Jas />
    <App />
    
  </React.StrictMode>
);

