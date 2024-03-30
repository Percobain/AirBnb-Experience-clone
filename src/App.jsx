import React from 'react'
import './App.css'
import Navbar from '../components/navbar.jsx'
import Hero from '../components/hero.jsx'
import Card from '../components/card.jsx';
import data from './data.jsx';

export default function App() {
  const cards = data.map(item => {
  return (
    <Card 
        key={item.id} 
        item = {item}
    />
    )
  })        

  return (
  <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
  </div>
  )
}