import React from 'react'
import './Hero.css'
import Header from '../Header/Header'

const Hero = () => {
  return (
    <div className="hero">
        <div className="esquerda-h">
            <Header/>
        </div>
        <div className="direita-h">dir</div>
    </div>
  )
}

export default Hero