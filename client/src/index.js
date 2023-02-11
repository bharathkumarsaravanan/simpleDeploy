import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './components/index';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));

axios.defaults.baseURL = "http://localhost:4000"

function App(){
  return(
    <Index />
  )
}

root.render(
    <App />
);
