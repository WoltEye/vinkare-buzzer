import React, { useState, useEffect } from 'react';
import KeySelector from './KeySelector/KeySelector';
import './Button.css';

export default function Button({ pressedKey, gameStarted, setGameWinner, gameWinner, playAudio }) {
  const [ selectedKey, setSelectedKey ] = useState(null);
  const [ buttonAuthor, setButtonAuthor ] = useState('');
  const [ buttonPressed, setButtonPressed ] = useState(false);

  const handleChange = e => {
    if(e.target.value.length < 51) {
    setButtonAuthor(e.target.value);
    }
  }
  useEffect(() => {
    if(pressedKey === selectedKey && selectedKey !== null && !gameWinner) {
      if(gameStarted) {
      setButtonPressed(true);
      }
      playAudio();
    }
    if(pressedKey === selectedKey && gameStarted && pressedKey !== null && !gameWinner) {
      setGameWinner(buttonAuthor);
    }
  }, [pressedKey])

  useEffect(() => {
    if(!gameWinner && buttonPressed === true) {
      setButtonPressed(false);
    }
  }, [gameWinner])

  return (
    <div className={gameStarted ? 'button-container game-started' : 'button-container'}>
    { !gameStarted ?
      <input 
      type='text' 
      id="button-author" 
      name="button-author"
      value={buttonAuthor} 
      onChange={handleChange}
      placeholder="Syötä nimi pelaajalle"
      maxLength='50' /> :
      <p className={gameWinner === buttonAuthor && gameWinner ? 'button-author winner' 
                    : gameWinner !== buttonAuthor && gameWinner ? 'button-author loser'
                    : 'button-author'}>
                    {buttonAuthor}
                    </p>
     }
      <div className={buttonPressed ? 'buzzer-button winner' : 'buzzer-button'}>
        <div 
        className={buttonPressed || pressedKey === selectedKey && selectedKey !== null ? 'button-top active' : 'button-top'}></div>
        <div className='button-bottom'>
          <div className='button-x-bg'></div>  
        </div>
      </div>
      { !gameStarted &&
      <KeySelector
      kbKey={selectedKey}
      setKey={setSelectedKey} />
      }
    </div>
  )
}