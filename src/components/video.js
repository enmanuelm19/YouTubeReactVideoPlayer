import React from 'react';

const Video = () => {
  return(
    <div className="columns">
      <div className="column is-three-quarters">
        <figure className="image is-16by9">
          <img src="https://bulma.io/images/placeholders/256x256.png" />
        </figure>
      </div>
      <div className="column">
        <div className="content">
          <h2> Titulo video </h2>
          <br/>
          <p> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;