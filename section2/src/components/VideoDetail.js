import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { parseHTML } from '../utils/functions';

const VideoDetail = ({ video }) => {
  const makeIframe = () => ({
    __html: video.embed.html
      ? parseHTML(video.embed.html)
      : `<div style="width:1280px; height:720px; display:flex; justify-content:center;
                    align-items:center; font-size:3rem; background-color:#eee;
                    border-radius:5px;">No Video</div>`,
  });

  return (
    <div>
      {video ? (
        <Box sx={{ mt: '10px' }}>
          <div dangerouslySetInnerHTML={makeIframe()} />
          <Typography variant="h4" sx={{ mt: '1rem', ml: '15px' }}>
            {video.name}
          </Typography>
          <Typography variant="body1" paragraph sx={{ mt: '0.5rem', ml: '15px' }}>
            {video.description?.length > 50 ? `${video.description.substring(0, 50)}...` : video.description}
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            width: 1280,
            height: 720,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '3rem',
            backgroundColor: '#eee',
            borderRadius: '5px',
          }}
        >
          Loading...
        </Box>
      )}
    </div>
  );
};

export default VideoDetail;
