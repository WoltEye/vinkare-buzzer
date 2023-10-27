import React, { useState, useEffect } from 'react';
import Button from './Button/Button';
import './ButtonGrid.css';

export default function ButtonGrid({ buttonAmount, onNameChange, gap, gameStarted, setGameWinner, gameWinner, playAudio, setButtonNameStatus, bgColor, setKbButtonStatus, buttonSize, authorNameSize, textColor }) {
    const [ pressedKey, setPressedKey ] = useState(null);
    const [ hideGridItems, setHideGridItems ] = useState(false);
    
    let timeoutId;

    const getSize = (num, size) => {
      const distance = (size - 1 + 1) * num;
      return distance;
    }

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
          setButtonNameStatus={setButtonNameStatus}
          playAudio={playAudio}
          setKbButtonStatus={setKbButtonStatus}
          buttonSize={buttonSize}
          authorNameSize={authorNameSize}
          gap={gap}
          getSize={getSize}
          textColor={textColor}
          bgColor={bgColor}
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
      }, [gameWinner]);

  return (
  <>
    <div 
    style={{gap: `${getSize(2, gap)}rem`}}
    className={hideGridItems ? 'button-grid fade-out' : 'button-grid'}>
      { renderButtons() }
    </div>
  </>
  )
}