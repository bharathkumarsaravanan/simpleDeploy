import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './components/index';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));

axios.defaults.baseURL = "http://43.205.114.56/"

function App(){
  return(
    <Index />
  )
}

root.render(
    <App />
);
