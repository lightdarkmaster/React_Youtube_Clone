import React from 'react'
import './Video_content.css';

function VideoContent({image, creator_pic,creator, title, views, time}) {
  return (
    <div className="video__content">
      <div className="thumbnail">
      <img src={image} alt="t1"/>
      </div>
      <div className="container">
        <span className="creator__pic">
         <img src={creator_pic} alt="c-logo" />
        </span>
        <div className="video_title">
          <strong>{title}</strong>
          <p>{creator}</p>
          <p>{views}K views  🔘&nbsp; {time}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoContent;
