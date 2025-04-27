import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/User/Login';
import './App.css'
import Register from './pages/Register';
import Dashboard from './pages/User/Dashboard';
import AppLayout from './pages/AppLayout';
import LayoutWrapper from './pages/LayoutWrapper';
import Users from './pages/User/Users';

function App() {
  

  return (
    <>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LayoutWrapper />}>
          <Route index path='dashboard'  element={<Dashboard/>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<h1>Settings</h1>} />  
          <Route path="/users/:id" element={<h1>User</h1>} />
        </Route>
        </Routes>
  
    </>
  )
}

export default App
