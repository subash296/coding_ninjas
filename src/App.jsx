import { div } from 'framer-motion/client'
import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import WhyUs from './components/WhyUs'
import Offer from './components/Offer'
import Impact from './components/impact'
import Prodigy from './components/prodigy'
import Location from './components/Location'
import Center from './components/Center'
import Footer from './components/Footer'
import Carousel from './components/carousel'

function App() {
  return (
      <div className='overflow-x-hidden'>
        <Header />
        <Home />
        <WhyUs />
        <Offer />
        <Impact />
        <Prodigy />
        <Location />
        <Carousel />
        <Center />
        <Footer />
        
      </div>
  )
}

export default App