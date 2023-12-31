import React, { useEffect, useState } from 'react';
import ButtonGrid from './Components/ButtonGrid/ButtonGrid.jsx';
import BuzzerAudio from '../assets/Audio/button_buzzer.mp3'
import StartButton from './Components/StartButton/StartButton.jsx';
import WinnerScreen from './Components/WinnerScreen/WinnerScreen';
import SettingsButton from './Components/SettingsButton/SettingsButton';
import Settings from './Components/Settings/Settings.jsx'
import NotificationOverlay from './Components/NotificationOverlay/NotificationOverlay.jsx';
import './App.css';
import NoMobileSupport from './Components/NoMobileSupport/NoMobileSupport.jsx';

export default function App() {
  const [ buttonAmount, setButtonAmount ] = useState(4);
  const [ buttonNameStatus, setButtonNameStatus ] = useState([]);
  const [ kbButtonStatus, setKbButtonStatus ] = useState([]);
  const [ gameStarted, setGameStarted ] = useState(false);
  const [ gameWinner, setGameWinner ] = useState(undefined);
  const [ hideGrid, setHideGrid ] = useState(false);
  const [ buttonSize, setButtonSize ] = useState(1);
  const [ authorNameSize, setAuthorNameSize ] = useState(1.2);
  const [ gap, setGap ] = useState(0.5);
  const [ bgColor, setBgColor ] = useState('#000000');
  const [ textColor, setTextColor ] = useState('#f5f5f5');
  const [ volume, setVolume ] = useState(0.1);
  const [ showNotification, setShowNotification ] = useState(false);
  const [ notificationType, setNotificationType ] = useState('failedToStart');
  const [ cookieConsent, setCookieConsent ] = useState(false);
  

  const playAudio = () => {
    const buzzer = new Audio(BuzzerAudio);
    buzzer.volume = volume;
    buzzer.play();
  }

  useEffect(() => {
    document.body.style.background = bgColor;
  }, [bgColor]);

  return ( 
    <>
    <NoMobileSupport />
    { showNotification &&
    <NotificationOverlay 
    textColor={textColor}
    bgColor={bgColor}
    setShowNotification={setShowNotification}
    type={notificationType}
    setCookieConsent={setCookieConsent}/>
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
       playAudio={playAudio}
       setNotificationType={setNotificationType}
       setShowNotification={setShowNotification}
       cookieConsent={cookieConsent}/>
    }
    <ButtonGrid 
    buttonAmount={buttonAmount}
    setButtonNameStatus={setButtonNameStatus}
    buttonNameStatus={buttonNameStatus}
    gameStarted={gameStarted}
    gameWinner={gameWinner}
    setGameWinner={setGameWinner}
    playAudio={playAudio}
    setKbButtonStatus={setKbButtonStatus}
    kbButtonStatus={kbButtonStatus}
    buttonSize={buttonSize}
    authorNameSize={authorNameSize}
    setHideGrid={setHideGrid}
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
    setShowNotification={setShowNotification}
    setNotificationType={setNotificationType}/>
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