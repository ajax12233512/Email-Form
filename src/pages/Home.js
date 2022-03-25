import React from 'react'
import Header from '../components/Home-Components/Header/Header'
import Hero from '../components/Home-Components/Hero/Hero'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Header />
        <Hero />
    </div>
  )
}

export default Home