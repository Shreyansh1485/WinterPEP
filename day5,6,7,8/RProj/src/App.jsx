import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Abc from './abc'
import Sports from './Sports'
import Maintain from './Maintain'
import Counter from './counter'

function App() {

  return (
    <>
      <Abc name="Shreyansh"></Abc>
      <Sports></Sports>
      <Maintain></Maintain><br></br>
      <Counter></Counter>
    </>
  )
}

export default App
