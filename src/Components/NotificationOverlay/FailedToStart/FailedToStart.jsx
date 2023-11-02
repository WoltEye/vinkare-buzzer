import React from 'react';
import './FailedToStart.css';

export default function FailedToStart({ setHover, setShowNotification, hover, bgColor, textColor }) {
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