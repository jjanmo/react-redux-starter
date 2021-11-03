import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import YoutubeSearchAPI from 'youtube-api-search';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import { videos } from './dummy';

class Section2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    // 유투브 API 할당량에 의해 주석 처리
    // YoutubeSearchAPI({ key: process.env.API_KEY, term: 'IU' }, (videos) =>
    //   this.setState({ videos, selectedVideo: videos[0] })
    // );
  }

  componentDidMount() {
    this.setState({ videos, selectedVideo: videos[0] });
  }

  onClickVideo(video) {
    this.setState({ video });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default Section2;
