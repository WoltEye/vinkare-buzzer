import React, { useState } from 'react';
import './ButtonAmountDropdown.css';

export default function ButtonAmountDropdown({ buttonAmount, bgColor, changeButtonAmount, textColor }) {
  const [ hover, setHover ] = useState(false);
  const handleChange = e => {
    e.target.blur();
    if(e.target.value > 0 && e.target.value < 11) {
      changeButtonAmount(Number(e.target.value));
      }
    }   

  return (
    <div className='button-amount-dropdown'>
    <label 
    htmlFor="button-amount"
    style={{color: textColor}}>Nappien Määrä</label>
      <div 
      className='select-wrapper'
      onMouseOver={() => { setHover(true) }}
      onMouseOut={() => { setHover(false) }}
      style={hover ? { color: bgColor } : { color: textColor }}>
        <select 
        id="button-amount"
        name="button-amount"
        value={buttonAmount}
        style={hover ? {borderColor: textColor, color: bgColor, background: textColor}
            : {borderColor: textColor, color: textColor, background: bgColor}}
        onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>  
          <option value="3">3</option>  
          <option value="4">4</option>  
          <option value="5">5</option>  
          <option value="6">6</option>  
          <option value="7">7</option>  
          <option value="8">8</option>  
        </select>
      </div>
    </div>
  )
}