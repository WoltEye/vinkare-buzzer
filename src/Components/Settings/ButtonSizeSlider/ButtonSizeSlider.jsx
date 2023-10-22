import React from 'react';
import './ButtonSizeSlider.css';

export default function ButtonSizeSlider({ size, setSize, textColor }) {
  const handleChange = e => {
    if(e.target.value <= 2 && e.target.value > 0) {
      setSize(Number(e.target.value));
    }
  }
  return (
    <div className='button-size-slider'>
      <label htmlFor='size-slider'
      style={{color: textColor}}>Nappien koko</label>
      <input 
      type="range" 
      step="0.1"
      min="0.1"
      max="2"
      id="size-slider"
      name="size-slider"
      onChange={handleChange}
      value={size}
      onMouseUp={(e => { e.target.blur() })}/>
      <label className='value-label' 
      htmlFor="size-slider"
      style={{color: textColor}}>{size}</label>
    </div>
  )
}