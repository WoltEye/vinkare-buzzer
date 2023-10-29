import React, { useEffect, useState } from 'react';
import ButtonGrid from './Components/ButtonGrid/ButtonGrid.jsx';
import BuzzerAudio from '../assets/Audio/button_buzzer.mp3'
import StartButton from './Components/StartButton/StartButton.jsx';
import WinnerScreen from './Components/WinnerScreen/WinnerScreen';
import SettingsButton from './Components/SettingsButton/SettingsButton';
import Settings from './Components/Settings/Settings.jsx'
import NotificationOverlay from './Components/NotificationOverlay/NotificationOverlay.jsx';
import './App.css';

export default function App() {
  const [ buttonAmount, setButtonAmount ] = useState(4);
  const [ buttonNameStatus, setButtonNameStatus ] = useState([]);
  const [ kbButtonStatus, setKbButtonStatus ] = useState([]);
  const [ gameStarted, setGameStarted ] = useState(false);
  const [ gameWinner, setGameWinner ] = useState(undefined);
  const [ hideGrid, setHideGrid ] = useState(false);
  const [ buttonSize, setButtonSize ] = useState(1);
  const [ authorNameSize, setAuthorNameSize ] = useState(1);
  const [ gap, setGap ] = useState(0);
  const [ bgColor, setBgColor ] = useState('#000000');
  const [ textColor, setTextColor ] = useState('#f5f5f5');
  const [ volume, setVolume ] = useState(0.1);
  const [ showNotification, setShowNotification ] = useState(false);
  const [ keyTest, setKeyTest  ] = useState([]);

  const playAudio = () => {
    const buzzer = new Audio(BuzzerAudio);
    buzzer.volume = volume;
    buzzer.play();
  }

  useEffect(() => {
    if(gameWinner) {
      setTimeout(() => {
        setHideGrid(true);
      }, 850)
    }
  }, [gameWinner]);

  useEffect(() => {
    if(buttonAmount < buttonNameStatus.length) {
      setButtonNameStatus(prev => {
        return prev.filter((_, index) => index !== prev.length - 1);
      });
    }
    if(buttonAmount < kbButtonStatus.length) {
      setKbButtonStatus(prev => {
        return prev.filter((_, index) => index !== prev.length - 1);
      });
    }
  }, [buttonAmount])

  useEffect(() => {
    document.body.style.background = bgColor;
  }, [bgColor]);

  return ( 
    <>
    { showNotification &&
    <NotificationOverlay 
    textColor={textColor}
    bgColor={bgColor}
    setShowNotification={setShowNotification}/>
    }
    { gameStarted &&
      <SettingsButton 
      setGameStarted={setGameStarted}
      setHideGrid={setHideGrid}
      setGameWinner={setGameWinner}/>
    } 
    <section style={hideGrid ? {display: 'none'} : {}} className={gameStarted ? 'game' : 'button-layout'}>
    { !gameStarted &&
      <Settings 
       bgColor={bgColor}
       setBgColor={setBgColor}
       gap={gap}
       setGap={setGap}
       authorSize={authorNameSize}
       setAuthorSize={setAuthorNameSize}
       size={buttonSize} 
       setSize={setButtonSize}
       buttonAmount={buttonAmount}
       changeButtonAmount={setButtonAmount}
       textColor={textColor}
       setTextColor={setTextColor}
       volume={volume}
       setVolume={setVolume}
       playAudio={playAudio}/>
    }
    <ButtonGrid 
    buttonAmount={buttonAmount}
    setButtonNameStatus={setButtonNameStatus}
    gameStarted={gameStarted}
    gameWinner={gameWinner}
    setGameWinner={setGameWinner}
    playAudio={playAudio}
    setKbButtonStatus={setKbButtonStatus}
    buttonSize={buttonSize}
    authorNameSize={authorNameSize}
    gap={gap}
    textColor={textColor}
    bgColor={bgColor}
    />
    { !gameStarted &&
    <StartButton 
    startGame={setGameStarted}
    buttonNameStatus={buttonNameStatus}
    kbButtonStatus={kbButtonStatus}
    buttonAmount={buttonAmount}
    textColor={textColor}
    bgColor={bgColor}
    setShowNotification={setShowNotification}/>
    }
    </section>
    { hideGrid &&
      <WinnerScreen 
      winnerName={gameWinner}
      setHideGrid={setHideGrid}
      setGameWinner={setGameWinner}
      textColor={textColor}/>
    }
    </>
  )
}