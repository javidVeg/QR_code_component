import { useState } from 'react'
import QR from "./QR/QR"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <QR/>
    </div>
  )
}

export default App
