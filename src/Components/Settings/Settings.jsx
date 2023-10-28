import React from 'react';
import ButtonAmountDropdown from './ButtonAmountDropdown/ButtonAmountDropdown';
import AuthorSizeSlider from './AuthorSizeSlider/AuthorSizeSlider';
import ButtonSizeSlider from './ButtonSizeSlider/ButtonSizeSlider';
import ButtonGapSlider from './ButtonGapSlider/ButtonGapSlider';
import BackgroundColorPicker from './BackgroundColorPicker/BackgroundColorPicker';
import './Settings.css';
import TextColorPicker from './TextColorPicker/TextColorPicker';
import VolumeSlider from './VolumeSlider/VolumeSlider';

export default function Settings({ bgColor, playAudio, volume, setVolume, setBgColor, gap, setGap, authorSize, setAuthorSize, size, setSize, buttonAmount, changeButtonAmount, textColor, setTextColor }) {
  return (
    <div className='settings'>
      <h1 style={{color: textColor}}>Asetukset</h1>
      <ButtonAmountDropdown
      buttonAmount={buttonAmount}
      changeButtonAmount={changeButtonAmount}
      textColor={textColor}
      bgColor={bgColor}/>
      <VolumeSlider 
      volume={volume}
      setVolume={setVolume}
      playAudio={playAudio}
      textColor={textColor}
      bgColor={bgColor}/>
      <ButtonSizeSlider 
      size={size}
      setSize={setSize}
      textColor={textColor}/>
      <AuthorSizeSlider 
      authorSize={authorSize}
      setAuthorSize={setAuthorSize}
      textColor={textColor}/>
      <ButtonGapSlider 
      gap={gap}
      setGap={setGap}
      textColor={textColor}/>
      <BackgroundColorPicker
      bgColor={bgColor}
      setBgColor={setBgColor} 
      textColor={textColor}/>
      <TextColorPicker 
      setTextColor={setTextColor}
      textColor={textColor} />
    </div>
  )    
}