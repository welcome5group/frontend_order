import React from 'react';
import './App.css';
import { Router, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import FindPasswordPage from './pages/FindPasswordPage';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path='/menu' element={<MenuPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path='/findPassword' element={<FindPasswordPage />} />
    </Routes>
  );
}

export default App;
