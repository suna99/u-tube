import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import Utube from './service/utube';
import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});

const utube = new Utube(httpClient);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App utube={utube} />
  </React.StrictMode>,
);
