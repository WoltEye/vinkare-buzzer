import React, { useState } from 'react';
import './NoThemeFound.css';

export default function NoThemeFound({ setShowNotification, bgColor, textColor }) {
    const [ hover, setHover ] = useState(false);
    return (
    <>
    <h2>Virhe</h2>
    <p>
      Tallenettua teemaa ei löytynyt!
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