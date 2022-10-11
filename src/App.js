import { useEffect, useState } from 'react';
import './App.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyC10fo2eAPhX6RvU1ogKX7g5yiwQhrGE0g", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <VideoList videos={videos} />
  );
}

export default App;
