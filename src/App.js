import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/title';
import SearchBar from './components/search_bar';
import Video from './components/video';
import VideoList from './components/video_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title />
        </header>
        <section className="section">
          <div className="container is-fluid">
            <SearchBar />
            <br/>
            <div className="box">
              <Video />
              <hr/>
              <VideoList />
            </div>
            </div>
        </section>
      </div>
    );
  }
}

export default App;
