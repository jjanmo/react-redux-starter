import React from 'react';

const styles = {
  wrapper: {
    margin: '10px',
    cursor: 'pointer',
  },
  title: {
    fontSize: '15px',
  },
  channel: {
    fontSize: '13px',
    color: 'gray',
  },
  date: {
    fontSize: '13px',
    color: 'gray',
  },
};

const VideoListItem = ({ video }) => {
  return (
    <li style={styles.wrapper}>
      <div className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={video.snippet.thumbnails.default.url} />
          </div>
          <div className="media-body">
            <div className="media-heading" style={styles.title}>
              {video.snippet.title}
            </div>
            <div style={styles.channel}>{video.snippet.channelTitle}</div>
            <div style={styles.date}>{video.snippet.publishedAt.substring(0, 10)}</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
