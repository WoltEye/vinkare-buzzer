import React from 'react';
import './ButtonGapSlider.css';

export default function ButtonGapSlider({ gap, setGap, textColor }) {
  const handleChange = e => {
    if(e.target.value <= 2 && e.target.value >= 0) {
      setGap(e.target.value);
    }
  }
  return (
    <div className='button-gap-slider'>
      <label 
      htmlFor='gap-slider'
      style={{color: textColor}}>Nappien väli</label>
      <input 
      type="range"
      min="0"
      max="2"
      step="0.1"
      id="gap-slider"
      name="gap-slider"
      value={gap}
      onChange={handleChange}
      onMouseUp={(e) => { e.target.blur() }}/>
      <label className='gap-label' 
      htmlFor='gap-slider'
      style={{color: textColor}}>{gap}</label>
    </div>
  )
}