import React, { useState } from 'react';
import './StartButton.css';

export default function StartButton({ startGame, bgColor, textColor, setShowNotification, buttonNameStatus, buttonAmount, kbButtonStatus, setNotificationType}) {
  const [ hovered, setHovered ] = useState(false);
  const handleStartGame = () => {
    if(buttonNameStatus.length === buttonAmount && buttonNameStatus.every(item => item ? true : false) && kbButtonStatus.length === buttonAmount) {
      startGame(true);
    } else {
      setNotificationType('failedToStart');
      setShowNotification(true);
    }
  }
  return (
    <button 
    onClick={handleStartGame}
    onMouseOver={() => { setHovered(true) }}
    onMouseOut={() => { setHovered(false) }}
    className='start-button'
    style={hovered ? { borderColor: textColor, color: bgColor, background: textColor } 
          : { borderColor: textColor, color: textColor, background: bgColor }}>
      Aloita Peli
    </button>
  )
}