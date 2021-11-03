import React from 'react';

const VideoListItem = ({ video, onClickVideo }) => {
  return (
    <li onClick={() => onClickVideo(video)}>
      <div>
        <div>
          <div>
            <img src={video.pictures.base_link} width={200} height={150} alt="thumbnail" />
          </div>
          <div>
            <div>{video.name}</div>
            <div>{video.user.name}</div>
            <div>{video.created_time.substring(0, 10)}</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
