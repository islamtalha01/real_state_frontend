import { useState } from 'react'

import './App.css'
import Layout from './components/Layout'
import ChatPage from './pages/chat'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ChatPage/>
    </>
  )
}

export default App
