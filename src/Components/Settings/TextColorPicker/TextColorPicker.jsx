import React from 'react';
import './TextColorPicker.css';

export default function TextColorPicker({ textColor, setTextColor }) {
  const handleChange = e => {
    setTextColor(e.target.value);
  }
  return (
    <div className='text-color-picker'>
      <label 
      htmlFor='color-picker'
      style={{color: textColor}}>Tekstin Väri</label>
      <input 
      type="color"
      value={textColor}
      onChange={handleChange}
      id="color-picker"
      name="color-picker"/>
    </div>
  )
}