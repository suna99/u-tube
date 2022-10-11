import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from '../video_list/video_list.module.css';

const VideoList = (props) => (
  <div className={styles.container}>
    <ul className={styles.videos}>
      {props.videos.map(video =>(
        <VideoItem 
        key={video.id.videoId}
        video={video}/>
        ))}
    </ul>
  </div>
  );

export default VideoList;