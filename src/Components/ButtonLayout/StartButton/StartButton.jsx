import React from 'react';
import './StartButton.css';

export default function StartButton({ startGame }) {
  return (
    <button 
    onClick={() => { startGame(true) }}
    className='start-button'>
      Aloita Peli
    </button>
  )
}