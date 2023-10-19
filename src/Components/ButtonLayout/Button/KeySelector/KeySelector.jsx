import React, { useState, useEffect } from 'react';
import SelectionOverlay from './SelectionOverlay/SelectionOverlay';

export default function KeySelector({ setKey, kbKey }) {
  const [ selectionOverlay, setSelectionOverlay ] = useState(false);

  let timeoutId;
  let intervalId;

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
    <button onClick={handleClick}>
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