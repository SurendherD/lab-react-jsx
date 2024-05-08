import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AppClass from "./AppClass";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AppClass />
  </React.StrictMode>,
)

