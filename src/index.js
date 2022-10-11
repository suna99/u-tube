import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Utube from './service/utube';

const utube = new Utube(process.env.REACT_APP_YOUTUBE_API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <App utube={utube} />
  </React.StrictMode>,
  document.getElementById('root')
);
