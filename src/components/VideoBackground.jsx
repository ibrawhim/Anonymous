// VideoBackground.js
import React from 'react';
import '../video.css'

const VideoBackground = () => {
    let bgVideo = {
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        position: 'fixed',
        left: '0',
        right:' 0',
        top: '0',
        bottom: '0',
        zIndex: '-1'
    }
  return (
    <div  className="video-background">
      <video autoPlay loop muted style={bgVideo}>
        <source src="Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
