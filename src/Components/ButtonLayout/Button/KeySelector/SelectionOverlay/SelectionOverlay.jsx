import React, { useEffect } from 'react';
import './SelectionOverlay.css';

export default function SelectionOverlay({ overlay, changeKey }) {
  const onKeyDown = e => {
    changeKey(e.key);
    overlay(false);
  }

  useEffect(() => {
  document.addEventListener('keydown', onKeyDown);
  return () => {
    document.removeEventListener('keydown', onKeyDown);
  }
  }, [])

  return (
    <div 
    className='selection-overlay'>
      <h2>Paina näppäintä jonka haluat asettaa</h2>
    </div>
  )
}