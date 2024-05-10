import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AppClass from "./AppClass";
import './App.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1 id='title'>Kalvium Gallery</h1>
    <App />
    <AppClass />
  </React.StrictMode>,
)

