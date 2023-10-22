import React, { useState } from 'react';
import SelectionOverlay from './SelectionOverlay/SelectionOverlay';
import './KeySelector.css';

export default function KeySelector({ setKey, kbKey, textColor, bgColor }) {
  const [ selectionOverlay, setSelectionOverlay ] = useState(false);
  const [ hovered, setHovered ] = useState(false);

  const handleClick = (e) => {
    e.target.blur();
    setSelectionOverlay(true);
  } 

  return (
    <>
    { selectionOverlay &&
      <SelectionOverlay 
      overlay={setSelectionOverlay}
      changeKey={setKey}
      />
    }
    <button
    onMouseOver={() => { setHovered(true) }}
    onMouseOut={() => { setHovered(false) }} 
    onClick={handleClick}
    className='key-selector-button'
    style={hovered ? {borderColor: textColor, color: bgColor, background: textColor} : {borderColor: textColor, color: textColor, background: bgColor}}>
    { kbKey === ' ' ?
      'Space'
      : kbKey ?
        kbKey :
    'Valitse Näppäin'
    }
    </button>
    </>
  )
}