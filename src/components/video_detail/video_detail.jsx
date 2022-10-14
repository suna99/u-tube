import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({video, video:{snippet}}) => (
  <div className={ styles.container}>
    <section className={styles.detail}>
      <iframe 
        className={styles.video}
        type="text/html" 
        title='utube video player'
        width="100%" 
        height="600px" 
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen>
      </iframe>
      <div className={styles.content_wrap}>
        <h2 className={styles.title}>{snippet.title}</h2>
        <h3 className={styles.channel}>{snippet.channelTitle}</h3>
        <pre className={styles.desc}>{snippet.description}</pre>
      </div>
    </section>
  </div>
);

export default VideoDetail;