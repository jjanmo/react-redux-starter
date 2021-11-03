import { List } from '@mui/material';
import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onClickVideo }) => {
  return (
    <>
      {videos && videos.length > 0 ? (
        <List sx={{ ml: '20px' }}>
          {videos.map((video) => (
            <VideoListItem key={video.resource_key} video={video} onClickVideo={onClickVideo} />
          ))}
        </List>
      ) : (
        <List
          sx={{
            width: '100%',
            height: '100%',
            fontSize: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#dff9fb',
          }}
        >
          Loading...
        </List>
      )}
    </>
  );
};

export default VideoList;
