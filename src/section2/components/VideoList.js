import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos }) => {
  console.log(videos);
  return (
    <ul className="col-md-4 list-group">
      {videos && videos.length > 0 && videos.map((video) => <VideoListItem key={video.etag} video={video} />)}
    </ul>
  );
};

export default VideoList;
