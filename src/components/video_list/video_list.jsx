import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from '../video_list/video_list.module.css';

const VideoList = ({videos, onVideoClick, display}) => {
  const displayType = display === 'list' ? styles.list : styles.grid;
  return(
    <div className={styles.container}>
      <ul className={displayType}>
        {videos.map(video =>(
          <VideoItem 
          key={video.id.videoId}
          video={video}
          onVideoClick={onVideoClick}
          display = {display}/>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;