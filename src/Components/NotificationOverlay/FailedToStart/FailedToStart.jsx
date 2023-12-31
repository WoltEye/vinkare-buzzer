import React, { useState } from 'react';
import './FailedToStart.css';

export default function FailedToStart({ setShowNotification, bgColor, textColor }) {
  const [ hover, setHover ] = useState(false);
  return (
    <>
    <h2>Virhe</h2>
    <p>
       Syötä jokaiselle pelaajalle nimi ja näppäin ennen pelin aloittamista. <br/>
       Tarkista myös että jokaisella pelaajalla on erilainen nimi.
    </p>
    <button 
    className='ok-button'
    onMouseOver={() => { setHover(true) }}
    onMouseOut={() => { setHover(false) }}
    onClick={() => { setShowNotification(false) }}
    style={hover ? {color: textColor, background: bgColor, border: `2px solid ${bgColor}`} 
          : {color: bgColor, background: textColor, border: `2px solid ${bgColor}`} }>
          OK
   </button>
   </>
  )
}