import React, { useEffect } from 'react';
import './WinnerScreen.css';

export default function WinnerScreen({ winnerName, setGameWinner, setHideGrid, textColor }) {
  
  const handleKeyDown = e => {
    if(e.key === ' ') {
      setGameWinner(null);
      setHideGrid(false);
    }
  }
  
  useEffect(() => {
  document.addEventListener('keydown', handleKeyDown);
  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  }
  }, [])
  return (
    <div className='winner-screen'>
    <h1 style={{color: textColor}}>{winnerName}</h1>
    <p style={{color: textColor}}>Painoi ensin</p>
    </div>
  )
}