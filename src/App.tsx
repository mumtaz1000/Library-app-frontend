import React from 'react';
import './App.css';
import { Footer } from './layouts/Footer/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { Navbar } from './layouts/Navbar/Navbar';

export const App = () => {
  return (
    <div>
    <Navbar />
    <HomePage />
    <Footer />
    </div>
  );
}

export default App;
