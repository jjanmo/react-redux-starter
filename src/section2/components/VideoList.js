import React from 'react';
import VideoListItem from './VideoListItem';

const styles = {
  list: {
    listStyle: 'none',
  },
};

const VideoList = ({ videos, onClickVideo }) => {
  return (
    <ul className="col-md-4 list-group" style={styles.list}>
      {videos &&
        videos.length > 0 &&
        videos.map((video) => <VideoListItem key={video.etag} video={video} onClickVideo={onClickVideo} />)}
    </ul>
  );
};

export default VideoList;
