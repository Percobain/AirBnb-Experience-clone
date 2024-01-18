import React from 'react'
import './App.css'
import Navbar from '../components/navbar.jsx'
import Hero from '../components/hero.jsx'
import Card from '../components/card.jsx';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}