import React, { useState, useEffect } from 'react';
import Button from './Button/Button';
import './ButtonGrid.css';

export default function ButtonGrid({ buttonAmount, kbButtonStatus, setHideGrid, buttonNameStatus, onNameChange, gap, gameStarted, setGameWinner, gameWinner, playAudio, setButtonNameStatus, bgColor, setKbButtonStatus, buttonSize, authorNameSize, textColor }) {
    const [ pressedKeys, setPressedKeys ] = useState([]);
    const [ hideGridItems, setHideGridItems ] = useState(false);
    
    let timeoutId;

    const getSize = (num, size) => {
      const distance = size * num;
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
          pressedKeys={pressedKeys} 
          key={`button${i}`}
          index={i}
          onNameChange={onNameChange}
          gameStarted={gameStarted}
          setGameWinner={setGameWinner}
          gameWinner={gameWinner}
          buttonNameStatus={buttonNameStatus}
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
        setPressedKeys(prev => {
        if(!prev.includes(e.code) && kbButtonStatus.includes(e.code)) {
          return [...prev, e.code];
        } else {
          return prev;
        }
        });
      }

      const handleKeyUp = (e) => {
        setPressedKeys(prev => {
          if(prev.includes(e.code)) {
            return prev.filter(item => item !== e.code);
          } else {
            return prev;
          }
        });
      }

      useEffect(() => {
        if(gameWinner) {
         timeoutId = setTimeout(() => {
            setHideGridItems(true);
            setPressedKeys([])
          }, 700); 
        } else {
          clearTimeout(timeoutId);
          setHideGridItems(false);
        }
      }, [gameWinner]);

      useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return () => { 
          document.removeEventListener('keydown', handleKeyDown); 
          document.removeEventListener('keyup', handleKeyUp);
        }
      }, [kbButtonStatus])

      useEffect(() => {
        if(buttonNameStatus.length > buttonAmount) {
          const diffrence = buttonNameStatus.length - 1 - buttonAmount;
          for(let i = buttonNameStatus.length - 1; i >= buttonNameStatus.length - 1 - diffrence; i--) {
            setButtonNameStatus(prev => {
              return prev.filter((_, index) => index !== i);
            });
          } 
        }
        if(kbButtonStatus.length > buttonAmount) {
          const diffrence = kbButtonStatus.length - 1 - buttonAmount;
          for(let i = kbButtonStatus.length - 1; i >= kbButtonStatus.length - 1 - diffrence; i--) {
            setKbButtonStatus(prev => {
              return prev.filter((_, index) => index !== i);
            });
          } 
        }
      }, [buttonAmount])

      useEffect(() => {
        if(gameWinner) {
          setTimeout(() => {
            setHideGrid(true);
          }, 850)
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