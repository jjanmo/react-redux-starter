import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import YoutubeSearchAPI from 'youtube-api-search';
import { videos } from './dummy';

class Section2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    };
  }

  componentDidMount() {
    // API 할당량에 의해서 우선 더미데이터로 작업
    // YoutubeSearchAPI({ key: process.env.API_KEY, term: 'surfboards' }, (videos) => console.log(videos));
    this.setState({ videos });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default Section2;
