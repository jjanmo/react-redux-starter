import React from 'react';

const VideoListItem = ({ video }) => {
  return (
    <li>
      <div className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={video.snippet.thumbnails.default.url} width={160} height={100} />
          </div>
          <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
            <div className="row">
              <div className="col-md-6">{video.snippet.channelTitle}</div>
              <div className="col-md-6">{video.snippet.publishedAt.substring(0, 10)}</div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
