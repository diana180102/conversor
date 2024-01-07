import { useState } from 'react'

import './App.css'
import Conversor from './components/conversor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Conversor></Conversor>
    </>
  )
}

export default App
