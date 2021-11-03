import React, { Component } from 'react';
import SearchBar from '../../section2/src/components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import axios from 'axios';
import { createAxiosConfig } from './utils/request';
import { Typography, Container } from '@mui/material';
import { Box } from '@mui/system';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.onClickVideo = this.onClickVideo.bind(this);
  }

  async componentDidMount() {
    const config = createAxiosConfig('get', {
      query: '스타크래프트',
      per_page: 5,
      direction: 'desc',
      sort: 'date',
    });

    try {
      const response = await axios(config);
      this.setState({
        videos: response.data.data,
        selectedVideo: response.data.data[0],
      });
    } catch (error) {
      console.log(error);
    }
  }

  onClickVideo(video) {
    this.setState({ selectedVideo: video });
  }

  render() {
    const { videos, selectedVideo } = this.state;

    return (
      <>
        <SearchBar />
        <Box sx={{ display: 'grid', gridTemplateColumns: '3fr 2fr' }}>
          <VideoDetail video={selectedVideo} />
          <VideoList videos={videos} onClickVideo={this.onClickVideo} />
        </Box>
      </>
    );
  }
}

export default App;
