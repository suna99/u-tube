import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({ utube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
  }

  const search = useCallback(
    query => {
      utube
        .search(query)
        .then(videos => {
          setVideos(videos)
          setSelectedVideo(null);
        });
  },[utube]);

  useEffect(() => {
    utube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, [utube]);

  return (
    <div className={styles.container}>
      <div className={styles.search_header}>
        <SearchHeader onSearch={search}/>
      </div>
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'} />
        </div>
      </section>
    </div >
  );
}

export default App;
