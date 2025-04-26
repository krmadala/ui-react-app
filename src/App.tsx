import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/User/Login';
import './App.css'
import Register from './pages/Register';

function App() {
  

  return (
    <>

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/users" element={<h1>Settings</h1>} />
        <Route path="/settings" element={<h1>Settings</h1>} />  
        <Route path="/users/:id" element={<h1>User</h1>} />
        </Routes>
  
    </>
  )
}

export default App
