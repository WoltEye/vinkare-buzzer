import React, { useEffect, useState } from 'react';
import './SelectionOverlay.css';

export default function SelectionOverlay({ overlay, changeKey }) {
  const [ intervalId, setIntervalId ] = useState(null);
  const [ closeOverlayTimer, setCloseOverlayTimer ] = useState(5); //In seconds
  
  const onKeyDown = e => {
    if(e.code === 'Escape') {
      overlay(false);
    } else {
      changeKey(e.code.toUpperCase());
      overlay(false);
    }
  }

  useEffect(() => {
  document.addEventListener('keydown', onKeyDown);
  const interval = setInterval(() => {
    if(closeOverlayTimer > 0) {
      setCloseOverlayTimer(prev => prev - 1);
    }
  }, 1000);
  setIntervalId(interval);
  return () => {
    document.removeEventListener('keydown', onKeyDown);
    clearInterval(interval);
    setCloseOverlayTimer(5);
  }
  }, []);

  useEffect(() => {
    if(closeOverlayTimer <= 0) {
      clearInterval(intervalId);
      setCloseOverlayTimer(5);
      overlay(false);
    }
  }, [closeOverlayTimer])

  return (
    <div 
    className='selection-overlay'>
      <h2>
        Paina näppäintä jonka haluat asettaa
      </h2>
      <p>{closeOverlayTimer}</p>
      <p className='tip'>Paina esc päästäksesi takaisin asetuksiin vaihtamatta näppäintä</p>
    </div>
  )
}