import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './ButtonGrid.css';

export default function ButtonGrid({ buttonAmount, onNameChange, gameStarted, setGameWinner, gameWinner, playAudio }) {
    const [ pressedKey, setPressedKey ] = useState(null);
    const [ hideGridItems, setHideGridItems ] = useState(false);
    
    let timeoutId;

    const renderButtons = () => {
        if(buttonAmount < 1) {
          console.error('Unexpected Error: buttonAmount is less than 1');
          return <></>
        }
        
        const buttonArray = [];
        for(let i = 0; i < buttonAmount; i++) {
          buttonArray.push(
          <Button
          pressedKey={pressedKey} 
          key={`button${i}`}
          index={i}
          onNameChange={onNameChange}
          gameStarted={gameStarted}
          setGameWinner={setGameWinner}
          gameWinner={gameWinner}
          playAudio={playAudio}
          />
          );
        }
        return buttonArray;
      }

      const handleKeyDown = e => {
        setPressedKey(e.key);
      }

      const handleKeyUp = () => {
        setPressedKey(null);
      }

      useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return () => { 
        document.removeEventListener('keydown', handleKeyDown); 
        document.removeEventListener('keyup', handleKeyUp);
        clearTimeout(timeoutId); 
        }
      }, [])
      useEffect(() => {
        if(gameWinner) {
         timeoutId = setTimeout(() => {
            setHideGridItems(true);
          }, 700);
          document.removeEventListener('keydown', handleKeyDown); 
          document.removeEventListener('keyup', handleKeyUp); 
        } else {
          clearTimeout(timeoutId);
          setHideGridItems(false);
          document.addEventListener('keydown', handleKeyDown);
          document.addEventListener('keyup', handleKeyUp);
        }
      }, [gameWinner])
  return (
  <>
    <div className={hideGridItems ? 'button-grid fade-out' : 'button-grid'}>
      { renderButtons() }
    </div>
  </>
  )
}