import { Container, ListItem, Typography } from '@mui/material';
import React from 'react';

const VideoListItem = ({ video, onClickVideo }) => {
  return (
    <ListItem button onClick={() => onClickVideo(video)}>
      <Container sx={{ display: 'flex' }}>
        <img src={video.pictures.base_link} width={200} height={150} alt="thumbnail" />
        <Container sx={{ ml: '5px' }}>
          <Typography>{video.name}</Typography>
          <Typography>{video.user.name}</Typography>
          <Typography>{video.created_time.substring(0, 10)}</Typography>
        </Container>
      </Container>
    </ListItem>
  );
};

export default VideoListItem;
