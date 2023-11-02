import React, { useEffect, useState } from 'react';
import './SaveAndLoadSettings.css';

export default function SaveAndLoadSettings({buttonAmount, gap, size, volume, textColor, bgColor, cookieConsent, authorSize, setShowNotification, setNotificationType, changeButtonAmount, setBgColor, setTextColor, setVolume, setGap, setSize, setAuthorSize}) {
  const [ saveButtonHover, setSaveButtonHover ] = useState(false);
  const [ loadButtonHover, setLoadButtonHover ] = useState(false);

  const handleSave = () => {
    const cookieConsentLocalStorage = localStorage.getItem('cookieConsent');
    if(cookieConsentLocalStorage) {  
    localStorage.setItem('settings', JSON.stringify({ 
       buttonAmount,
       gap,
       size,
       volume,
       textColor, 
       bgColor,
       authorSize
     }))
    } else {
      setNotificationType('cookieConsent');
      setShowNotification(true);
    }
  }
  
  useEffect(() => { if(cookieConsent) { handleSave() } }, [cookieConsent])

  const applySettings = settingsObject => {
    Object.keys(settingsObject).forEach(setting => {
      switch(setting) {
        case 'buttonAmount': 
        changeButtonAmount(settingsObject[setting]);
        break;
        case 'gap':
        setGap(settingsObject[setting]);
        break;
        case 'size':
        setSize(settingsObject[setting]);
        break;
        case 'volume':
        setVolume(settingsObject[setting]);
        break;
        case 'textColor':
        setTextColor(settingsObject[setting]);
        break;
        case 'bgColor':
        setBgColor(settingsObject[setting]);
        break;
        case 'authorSize':
        setAuthorSize(settingsObject[setting]);
        break;
        default: 
        console.error(`Unknown setting value ${setting}`);
      }
    })
  }

  const handleLoad = () => {
    const settingsRaw = localStorage.getItem('settings');
    const settings = settingsRaw ? JSON.parse(settingsRaw) : null;  
     if (!settings) {
      setNotificationType('noThemeFound');
      setShowNotification(true);
    } else {
      applySettings(settings);
    }
  }

  return (
    <>
    <div className='save-and-load-settings'>
    <button 
    onClick={handleSave}
    onMouseOver={() => { setSaveButtonHover(true) }}
    onMouseOut={() => { setSaveButtonHover(false) }}
    style={saveButtonHover ? {borderColor: textColor, color: bgColor, background: textColor} : {borderColor: textColor, color: textColor, background: bgColor}}>
      Tallenna Teema
    </button>
    <button 
    onClick={handleLoad}
    onMouseOver={() => { setLoadButtonHover(true) }}
    onMouseOut={() => { setLoadButtonHover(false) }}
    style={loadButtonHover ? {borderColor: textColor, color: bgColor, background: textColor} : {borderColor: textColor, color: textColor, background: bgColor}}>
      Käytä Tallennettua Teemaa
    </button>
    </div>
    </>
  )
} 