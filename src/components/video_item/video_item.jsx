import React from 'react';
import styles from './video_item.module.css';

  const VideoItem = ({video:{snippet}}) => (
      <li className={styles.video}>
        <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="video thumbnail"/>
        <div className={styles.txt_wrap}>
          <p className={styles.title}>{snippet.title}</p>
          <div className={styles.channelInfo_wrap}>
            <p className={styles.channel}>{snippet.channelTitle}</p>
            <p className={styles.video_time}>
              {new Intl.DateTimeFormat('en-US', {
                month: 'long',
                day: '2-digit',
                year: 'numeric',
              }).format(new Date(snippet.publishedAt))}
            </p>
          </div>
        </div>
      </li>
  );

export default VideoItem;