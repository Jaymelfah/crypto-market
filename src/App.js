import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import CoinDetails from './components/Pages/CoinDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/coins/:id" element={<CoinDetails />} />
      </Routes>
    </div>

  );
}

export default App;
