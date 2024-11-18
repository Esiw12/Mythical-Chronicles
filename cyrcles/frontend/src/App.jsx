import { useState } from 'react'
import Index from './Components/index/Completed'
import Rasp from './Components/rasp/main'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/rasp" element={<Rasp />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
