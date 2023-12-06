import React from 'react';
import './Content.css';
import VideoContent from './Video_content';

function Content() {
  return (
    <div className="cotent">
      <div className="category">
      <button className="cat__button">All</button>
      <button className="cat__button">Music</button>
      <button className="cat__button">Live</button>
      <button className="cat__button">Gadgets</button>
      <button className="cat__button">Gaming</button>
      <button className="cat__button">Mixes</button>
      <button className="cat__button">Computers</button>
      <button className="cat__button">Comedy</button>
      <button className="cat__button">OPM</button>
      <button className="cat__button">4K Resolution</button>
      <button className="cat__button">Chan</button>
      <button className="cat__button">Mobile Legends: Bang-Bang</button>
      </div>

      <div className="video__row">
        <VideoContent
        title='Chan: Learn to Code in React in 2 Hours'
        views={1.7}
        creator='ChanCodingTV'
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.efUvc7EHRuyVrmjNujR5SQHaEo%26pid%3DApi&f=1&ipt=98ce1738b461684ff061c22033b04857f3444399916e29659cabc7e88ba15de9&ipo=images"
        creator_pic="https://yt3.ggpht.com/FivzSh71CItph7jXLBuijmaX7f_zb6u31dDJ39YKcLwAyKvS0lVtt9SyzRAKrmMAKuqPX9icMw=s68-c-k-c0x00ffffff-no-rj"
        time="2 weeks ago"
        />

        <VideoContent
        title='Modern Tech: The Rise of Coding Jobs'
        views={8.7}
        creator='ChanCodingTV'
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._P22V_9Ih0V84ae--B-sxgHaEK%26pid%3DApi&f=1&ipt=91f24be209df56942263770e8bc3c5f37ff0f7048aa14710dbc742cd76026d6f&ipo=images"
        creator_pic="https://yt3.ggpht.com/FivzSh71CItph7jXLBuijmaX7f_zb6u31dDJ39YKcLwAyKvS0lVtt9SyzRAKrmMAKuqPX9icMw=s68-c-k-c0x00ffffff-no-rj"
        time="2 hrs ago"
        />

        

        
        
      </div>

      <div className="video__row">
  
        </div>
    </div>
  )
}

//width="560" height="315"

export default Content;
