import React, { createContext, useState, useContext } from 'react';

// Create a new context
const MessageContext = createContext();


// Create a provider component
export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [loading,setLoading] = useState(false)
  // const [ShouldFetchResponse,setShouldFetchResponse] = useState(false)
  const [audioEnd,setAudioEnd] = useState(false)
  const [enableAudio,setEnableAudio] = useState(false)
  const [prompt, setPrompt] = useState("");
  const [isMuted, setIsMuted] = useState(false);


  return (
    <MessageContext.Provider value={{ messages, setMessages,loading,setLoading,audioEnd,setAudioEnd,setEnableAudio,enableAudio,prompt,setPrompt,setIsMuted,isMuted }}>
      {children}
    </MessageContext.Provider>
  );
};

// Create a custom hook to use the messages context
export const useMessages = () => useContext(MessageContext);
