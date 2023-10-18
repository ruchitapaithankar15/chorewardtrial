import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FamilyFights from './FamilyFights';
import WeeklyTasks from './WeeklyTasks';

function App() {
  return (
    <Router>
    <div className='App'>
    <Routes>
      <Route path='/WeeklyTasks' element={<WeeklyTasks/>}/>
      <Route path='/FamilyFights' element={<FamilyFights/>}/>
    </Routes>
    </div>
    </Router>

  )
}

export default App
