import React, { createContext, useState, useContext } from 'react';

// Create a new context
const MessageContext = createContext();

// Create a provider component
export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  return (
    <MessageContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessageContext.Provider>
  );
};

// Create a custom hook to use the messages context
export const useMessages = () => useContext(MessageContext);
