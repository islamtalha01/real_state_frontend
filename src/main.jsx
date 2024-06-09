import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { MessageProvider } from './MessageContext';

ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <MessageProvider>
      <App />
    </MessageProvider>
   
   </BrowserRouter>
   
)
