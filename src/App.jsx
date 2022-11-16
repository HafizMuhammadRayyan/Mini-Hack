import React from 'react'
import './App.css'

// Pages import
import Login from './pages/login'
import Dashboard from './pages/dashboard';
import Class from './pages/class';
import Attendance from './pages/attendance';
import About from './pages/about';

import { Routes, Route } from "react-router-dom";



function App() {

  return (
    <div>

      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/classAdding" element={<Class/>} />
          <Route path="/attendance" element={<Attendance/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={
            <div>Page Not Found</div>
          } />
      </Routes>

      {/* <Login /> */}
    </div>
  )
}

export default App
