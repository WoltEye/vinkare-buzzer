import React, { useState } from 'react';
import './NotificationOverlay.css';

export default function NotificationOverlay({ bgColor, textColor, setShowNotification }) {
  const [ hover, setHover ] = useState(false);
  return (
    <div className='notification-overlay'>
      <div 
      className='notification-box'
      style={{color: bgColor, background: textColor}}>
        <div className='notification-box-content-container'>
          <h2>Virhe</h2>
          <p>Syötä jokaiselle pelaajalle nimi ja näppäin ennen pelin aloittamista</p>
          <button 
          className='ok-button'
          onMouseOver={() => { setHover(true) }}
          onMouseOut={() => { setHover(false) }}
          onClick={() => { setShowNotification(false) }}
          style={hover ? {color: textColor, background: bgColor, border: `2px solid ${bgColor}`} 
                : {color: bgColor, background: textColor, border: `2px solid ${bgColor}`} }>
                OK
         </button>
        </div>
    </div>
    </div>
  )
}