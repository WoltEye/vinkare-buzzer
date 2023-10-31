import React, { useState, useEffect } from 'react';
import KeySelector from './KeySelector/KeySelector';
import './Button.css';

export default function Button({ pressedKeys, gameStarted, getSize, bgColor, setGameWinner, gameWinner, playAudio, setButtonNameStatus, setKbButtonStatus, buttonSize, authorNameSize, textColor, index }) {
  const [ selectedKey, setSelectedKey ] = useState(null);
  const [ buttonAuthor, setButtonAuthor ] = useState('');
  const [ buttonPressed, setButtonPressed ] = useState(false);
  const [ kbSet, setKbSet ] = useState(false);

  const inputWidth = buttonAuthor.length <= 3 && buttonAuthor.length > 0 ? buttonAuthor.length * 1.2 : buttonAuthor ? buttonAuthor.length * 0.75 : 8;

  const handleChange = e => {
    if(e.target.value.length <= 25) {
      setButtonNameStatus(prev => {
        if(prev.includes(e.target.value)) {
          const newArr = [...prev];
          newArr[index] = null;
          return newArr;
        }
        const newArr = [...prev];
        newArr[index] = e.target.value;
        return newArr;
      })
      setButtonAuthor(e.target.value);
    }
  }

  useEffect(() => {
    if(pressedKeys.includes(selectedKey) && selectedKey !== null && !gameWinner) {
      if(gameStarted && pressedKeys[0] === selectedKey) {
      setButtonPressed(true);
      }
      playAudio();
    }
    if(pressedKeys[0] === selectedKey && gameStarted && !gameWinner) {
      setGameWinner(buttonAuthor);
    }
  }, [pressedKeys])

  useEffect(() => {
    if(!gameWinner && buttonPressed === true) {
      setButtonPressed(false);
    }
  }, [gameWinner]);


  useEffect(() => {
    if(selectedKey && !kbSet) {
      setKbSet(true);
      setKbButtonStatus(prev => [...prev, selectedKey]);
    } else if(selectedKey && kbSet) {
      setKbButtonStatus(prev => {
        const newArr = [...prev];
        newArr[index] = selectedKey;
        return newArr;
        //If a button is reassigned
      })
    }
     else if(!selectedKey && kbSet) {
      setKbSet(false);
      setKbButtonStatus(prev => {
        return prev.filter((_, i) => i !== prev.length - 1);
      })
    }
  }, [selectedKey])

  return (
    <div className={gameStarted ? 'button-container game-started' : 'button-container'}>
    { !gameStarted ?
      <input 
      type='text' 
      id="button-author" 
      name="button-author"
      value={buttonAuthor} 
      onChange={handleChange}
      placeholder="Pelaajan Nimi"
      maxLength='25'
      style={{fontSize: `${getSize(1.2, authorNameSize)}rem`, 
      width: `${getSize(inputWidth, authorNameSize)}rem`, color: textColor}} /> :
      <p
      className={buttonAuthor === gameWinner ? 'button-author winner' : gameWinner && gameWinner !== buttonAuthor ? 'button-author loser' : 'button-author'}
      style={gameWinner === buttonAuthor ? {fontSize: `${getSize(1.2, authorNameSize)}rem`, width: `${getSize(inputWidth, authorNameSize)}rem`, color: 'green'} :
      gameWinner && gameWinner !== buttonAuthor ? {fontSize: `${getSize(1.2, authorNameSize)}rem`, width: `${getSize(inputWidth, authorNameSize)}rem`, color: 'red'} :
      {fontSize: `${getSize(1.2, authorNameSize)}rem`, width: `${getSize(inputWidth, authorNameSize)}rem`, color: textColor}}>
                    {buttonAuthor}
                    </p>
     }
      <div 
      className={buttonPressed ? 'buzzer-button winner' : 'buzzer-button'}
      style={{height: `${getSize(8, buttonSize)}rem`, width: `${getSize(10, buttonSize)}rem`}}>
        <div 
        className='button-bottom'
        style={{height: `${getSize(7, buttonSize)}rem`, width: `${getSize(7, buttonSize)}rem`, boxShadow: `0 ${getSize(0.8, buttonSize)}rem 0 rgb(100,100,100)`}}>
        <div 
        className='button-top'
        style={buttonPressed || pressedKeys.includes(selectedKey) && selectedKey !== null ? 
          {height: `${getSize(5, buttonSize)}rem`, width: `${getSize(5, buttonSize)}rem`, boxShadow: `0 0 0 rgb(130, 0, 0)`, top: `${getSize(0.9, buttonSize)}rem`} :
          {height: `${getSize(5, buttonSize)}rem`, width: `${getSize(5, buttonSize)}rem`, boxShadow: `0 ${getSize(0.8, buttonSize)}rem 0 rgb(130, 0, 0)`, top: `${getSize(0.2, buttonSize)}rem`}}></div>  
        </div>
      </div>
      { !gameStarted &&
      <KeySelector
      kbKey={selectedKey}
      setKey={setSelectedKey} 
      textColor={textColor}
      bgColor={bgColor}/>
      }
    </div>
  )
}