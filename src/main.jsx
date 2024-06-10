import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { MessageProvider } from './MessageContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    {/* <ToastContainer> */}
   <MessageProvider>
      <App />
    </MessageProvider>
    <ToastContainer />

   </BrowserRouter>
   
)
