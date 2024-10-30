import React from 'react';
import logo from './logo.svg';
import './App.css';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Hero/>
      <Portfolio/>
      <Experience/>
    </>
  );
}

export default App;
