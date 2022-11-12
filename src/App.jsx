import React from 'react'
import './App.css'

// Pages import
import Login from './pages/login'
import Dashboard from './pages/dashboard';
import ClassAdding from './pages/classAdding';
import Attendance from './pages/attendance';
import About from './pages/about';

import { Routes, Route } from "react-router-dom";



function App() {

  return (
    <div>

      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/classAdding" element={<ClassAdding/>} />
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
