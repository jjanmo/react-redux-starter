import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onClickVideo }) => {
  return (
    <ul>
      {videos &&
        videos.length > 0 &&
        videos.map((video) => <VideoListItem key={video.resource_key} video={video} onClickVideo={onClickVideo} />)}
    </ul>
  );
};

export default VideoList;
