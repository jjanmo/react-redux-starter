import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { parseHTML } from '../utils/functions';

const VideoDetail = ({ video }) => {
  const makeIframe = () => ({ __html: parseHTML(video.embed.html) });

  return (
    <div>
      {video ? (
        <>
          <div dangerouslySetInnerHTML={makeIframe()} />
          <Typography variant="h4" sx={{ mt: '1rem', ml: '10px' }}>
            {video.name}
          </Typography>
          <Typography variant="body1" paragraph sx={{ mt: '0.5rem', ml: '10px' }}>
            {video.description}
          </Typography>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default VideoDetail;
