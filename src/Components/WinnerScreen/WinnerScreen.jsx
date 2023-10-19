import React, { useEffect } from 'react';
import './WinnerScreen.css';

export default function WinnerScreen({ winnerName, setGameWinner, setHideGrid }) {
  
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
    <h1>{winnerName}</h1>
    <p>Painoi ensin</p>
    </div>
  )
}