import React, { Component } from 'react';
import SearchBar from '../../section2/src/components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.onClickVideo = this.onClickVideo.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'get',
      baseURL: process.env.REACT_APP_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
      params: {
        query: 'iu',
        per_page: 10,
      },
    })
      .then((response) => {
        this.setState({
          videos: response.data.data,
          selectedVideo: response.data.data[0],
        });
      })
      .catch((error) => console.log(error));
  }

  onClickVideo(video) {
    this.setState({ selectedVideo: video });
  }

  render() {
    const { videos, selectedVideo } = this.state;

    return (
      <div>
        <SearchBar />
        <VideoDetail video={selectedVideo} />
        <VideoList videos={videos} onClickVideo={this.onClickVideo} />
      </div>
    );
  }
}

export default App;
