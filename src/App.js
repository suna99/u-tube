import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import Utube from './service/utube';

function App({ utube }) {
  const [videos, setVideos] = useState([]);
  const search = query => {
    utube
      .search(query)
      .then(videos => setVideos(videos));
  }

  useEffect(() => {
    utube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, []);

  return (
    <div className={styles.container}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
