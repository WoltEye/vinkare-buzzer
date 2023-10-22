import React, { useState } from 'react';
import './VolumeSlider.css';

export default function VolumeSlider({ volume, textColor, bgColor, setVolume, playAudio }) {
  const [ hovered, setHovered ] = useState(false);
  const handleChange = e => {
    if(e.target.value <= 100 && e.target.value >= 0) {
      setVolume(Number(e.target.value));
    }
  }
  return (
    <div className='volume-slider'>
      <label 
      htmlFor='volume'
      style={{color: textColor}}>Äänenvoimakkuus</label>
      <input 
      type='range'
      step="0.01"
      min="0"
      max="1"
      id="volume"
      name='volume'
      value={volume}
      onChange={handleChange}
      onMouseUp={(e) => { e.target.blur() }}/>
      <label 
      htmlFor='volume' 
      className='volume-label'
      style={{color: textColor}}>{volume}</label>
      <button 
      className='preview-audio'
      onMouseOver={() => { setHovered(true) }}
      onMouseOut={() => { setHovered(false) }}
      style={hovered ? { borderColor: textColor, color: bgColor, background: textColor } 
      : { borderColor: textColor, color: textColor, background: bgColor }}
      onClick={() => { playAudio() }}>Testaa äänenvoimakkuus</button>
    </div>
  )
}