import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      {/* <div className="bg-black min-h-screen flex justify-center items-center">
        <h1 className="text-white text-4xl font-bold">
          Password Manager
        </h1>
      </div> */}
      <Manager/>
    </>
  )
}

export default App
