import { useState } from 'react'

import './App.css'
import Layout from './components/Layout'
import ChatPage from './pages/chat'
// import Test from './components/Test'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ChatPage/>
    {/* <Test/> */}
    </>
  )
}

export default App
