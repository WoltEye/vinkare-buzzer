import React, { useState, useEffect } from 'react';
import SelectionOverlay from './SelectionOverlay/SelectionOverlay';

export default function KeySelector({ setKey, kbKey }) {
  const [ selectionOverlay, setSelectionOverlay ] = useState(false);
  
  let timeoutId;

  const handleClick = (e) => {
    e.target.blur();
    setSelectionOverlay(true);
    timeoutId = setTimeout(() => {
      setSelectionOverlay(false);
    }, 5000)
  }

  useEffect(() => {
    return () => {
      setSelectionOverlay(false);
      clearTimeout(timeoutId);
    }
  }, [])

  return (
    <>
    { selectionOverlay &&
      <SelectionOverlay 
      overlay={setSelectionOverlay}
      changeKey={setKey} />
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