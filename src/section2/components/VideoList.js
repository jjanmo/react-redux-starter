import React from 'react';
import VideoListItem from './VideoListItem';

const styles = {
  list: {
    listStyle: 'none',
  },
};

const VideoList = ({ videos }) => {
  return (
    <ul className="col-md-4 list-group" style={styles.list}>
      {videos && videos.length > 0 && videos.map((video) => <VideoListItem key={video.etag} video={video} />)}
    </ul>
  );
};

export default VideoList;
