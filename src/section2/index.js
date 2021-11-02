import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import YoutubeSearchAPI from 'youtube-api-search';
import { videos } from './dummy';
import VideoList from './components/VideoList';

class Section2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    };

    YoutubeSearchAPI({ key: process.env.API_KEY, term: '스타크래프트' }, (videos) => this.setState({ videos }));
  }

  // componentDidMount() {
  //   this.setState({ videos });
  // }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default Section2;
