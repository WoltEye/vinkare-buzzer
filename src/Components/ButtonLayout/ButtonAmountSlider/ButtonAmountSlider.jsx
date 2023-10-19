import React from 'react';
import './ButtonAmountSlider.css';

export default function ButtonAmountSlider({ buttonAmount, changeButtonAmount }) {
  const handleChange = e => {
    if(e.target.value > 0 && e.target.value < 11) {
      changeButtonAmount(e.target.value);
      }
    }   

  return (
    <div className='button-amount-slider'>
    <label htmlFor="button-amount">Nappien Määrä</label>
    <input 
    type="range" 
    id="button-amount"
    name="button-amount"
    min="1"
    max="10"
    step="1"
    value={buttonAmount}
    onChange={handleChange}/>
    <label htmlFor="button-amount">{buttonAmount}</label>
    </div>
  )
}