import { List } from '@mui/material';
import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onClickVideo }) => {
  return (
    <List sx={{ ml: '20px' }}>
      {videos &&
        videos.length > 0 &&
        videos.map((video) => <VideoListItem key={video.resource_key} video={video} onClickVideo={onClickVideo} />)}
    </List>
  );
};

export default VideoList;
