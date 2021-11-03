import React from 'react';

const styles = {
  loading: {
    fontSize: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    marginLeft: '20px',
  },
  title: {
    fontSize: '1.5rem',
    fotnWeight: 'bold',
    paddingLeft: '15px',
    marginTop: '20px',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1.1rem',
    paddingLeft: '15px',
  },
};

const VideoDetail = ({ video }) => {
  return (
    <div className="video-detail col-md-8">
      {video ? (
        <div style={styles.wrapper}>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
            ></iframe>
          </div>
          <div className="details">
            <div style={styles.title}>{video.snippet.title}</div>
            <div style={styles.description}>{video.snippet.description}</div>
          </div>
        </div>
      ) : (
        <div style={styles.loading}>Loading...</div>
      )}
    </div>
  );
};

export default VideoDetail;
