import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';
import { useMessages } from '../../MessageContext';
const MicToggle = () => {
  
  const {setIsMuted,isMuted} = useMessages()

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <button 
      onClick={toggleMute} 
      className="p-2 w-9 rounded-full bg-blue-500 "
    >
      <FontAwesomeIcon icon={isMuted ? faMicrophoneSlash : faMicrophone} />
    </button>
  );
};

export default MicToggle;
