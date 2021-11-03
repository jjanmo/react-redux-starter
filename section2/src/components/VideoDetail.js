import React from 'react';

const VideoDetail = ({ video }) => {
  const makeIFrame = () => ({ __html: video.embed.html });

  return (
    <div>
      {video ? (
        <div>
          <div dangerouslySetInnerHTML={makeIFrame()} />
          <div>
            <div>{video.name}</div>
            <div>{video.description}</div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default VideoDetail;
