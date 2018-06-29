import React from 'react';
import VideoItem from './video_item';

const VideoList = () => {
  return (
    <div className="columns">
      <div className="column">
        <h3 className="title">Video List </h3>
        <hr/>
        <ul>
          <li><VideoItem /></li>
          <li><VideoItem /></li>
          <li><VideoItem /></li>
        </ul>
      </div>
    </div>
  );
}

export default VideoList;