import React from 'react';
import './BackgroundColorPicker.css';

export default function BackgroundColorPicker({ bgColor, setBgColor, textColor }) {
  const handleChange = e => {
    setBgColor(e.target.value);
  }
  return (
  <div className='bg-color-picker'>
    <label 
    htmlFor='color-picker'
    style={{color: textColor}}>Taustan Väri</label>
    <input 
    type="color"
    value={bgColor}
    onChange={handleChange} />
  </div>
  )
}