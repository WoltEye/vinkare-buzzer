import React, { useEffect, useState } from 'react';
import ButtonAmountSlider from './ButtonAmountSlider/ButtonAmountSlider';
import ButtonGrid from './ButtonGrid/ButtonGrid';
import BuzzerAudio from '../../../assets/Audio/button_buzzer.mp3';
import StartButton from './StartButton/StartButton';
import WinnerScreen from '../WinnerScreen/WinnerScreen';
import './ButtonLayout.css';

export default function ButtonLayout() {
  const [ buttonAmount, setButtonAmount ] = useState(4);
  const [ buttonNames, setButtonNames ] = useState([]);
  const [ gameStarted, setGameStarted ] = useState(false);
  const [ gameWinner, setGameWinner ] = useState(undefined);
  const [ hideGrid, setHideGrid ] = useState(false);

  const playAudio = () => {
    const buzzer = new Audio(BuzzerAudio);
    buzzer.volume = 0.1;
    buzzer.play();
  }

  useEffect(() => {
    if(gameWinner) {
      setTimeout(() => {
        setHideGrid(true);
      }, 850)
    }
  }, [gameWinner])

  return ( 
    <>
    <section style={hideGrid ? {display: 'none'} : {}} className={gameStarted ? 'game' : 'button-layout'}>
    { !gameStarted &&
    <>
      <h1>Pelin Asetukset</h1>
      <ButtonAmountSlider 
      buttonAmount={buttonAmount}
      changeButtonAmount={setButtonAmount}/>
    </>
    }
    <ButtonGrid 
    buttonAmount={buttonAmount}
    onNameChange={setButtonNames}
    gameStarted={gameStarted}
    gameWinner={gameWinner}
    setGameWinner={setGameWinner}
    playAudio={playAudio}
    />
    { !gameStarted &&
    <StartButton 
    startGame={setGameStarted}/>
    }
    </section>
    { hideGrid &&
      <WinnerScreen 
      winnerName={gameWinner}
      setHideGrid={setHideGrid}
      setGameWinner={setGameWinner}/>
    }
    </>
  )
}