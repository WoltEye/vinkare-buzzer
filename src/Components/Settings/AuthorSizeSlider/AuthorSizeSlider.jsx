import React from 'react';
import './AuthorSizeSlider.css';

export default function AuthorSizeSlider({ authorSize, setAuthorSize, textColor }) {
  const handleChange = e => {
    if(e.target.value <= 2 && e.target.value > 0) {
      setAuthorSize(Number(e.target.value));
    }
  }
  return (
    <div className='author-size-slider'>
      <label 
      htmlFor='author-size'
      style={{color: textColor}}>Pelaajanimien koko</label>
      <input 
      type="range"
      step="0.1"
      min="0.1"
      max="2"
      id="author-size"
      name="author-size"
      value={authorSize}
      onChange={handleChange} 
      onMouseUp={(e => { e.target.blur() })}/>
      <label 
      htmlFor='author-size'
      className='size-label'
      style={{color: textColor}}>{authorSize}</label> 
    </div>
  )
}