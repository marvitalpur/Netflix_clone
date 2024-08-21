import React from 'react';
import "./Player.css";
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Plyer = () => {
  return (
    <div className='Player'>
      <img src={back_arrow_icon} alt=''/>
      <iframe width='90%' height='90%' src='https://www.youtube.com/embaded/PLcCy4ZCQ-4'
      title='trailer' frameBorder='0'  allowFullScreen></iframe>
      <div className="player_info">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  )
}

export default Plyer