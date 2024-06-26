import React, { createContext, useState, useContext } from 'react';

// Create a new context
const MessageContext = createContext();
const initialMessages = [
  {
    content: `• Are you interested in understanding the current real estate market trends in Southern California?\n\n• Which specific areas or neighborhoods are you interested in exploring within Southern California?\n\n• What type of community vibe are you looking for (e.g., family-friendly, urban, suburban, beach town)?\n\n• Do you need information on the buying process, including financing options and what it is like to have Todd Kingsley on your team?`, 
 
    role: "system" 
  }
];

// Create a provider component
export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [loading,setLoading] = useState(false)
  const [audioEnd,setAudioEnd] = useState(false)
  return (
    <MessageContext.Provider value={{ messages, setMessages,loading,setLoading,audioEnd,setAudioEnd }}>
      {children}
    </MessageContext.Provider>
  );
};

// Create a custom hook to use the messages context
export const useMessages = () => useContext(MessageContext);
