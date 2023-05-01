import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
        <div className="esquerda-h">
            <Header/>
            
            <div className="propaganda">
              <div></div>
              <span>O melhor club fitness da cidade</span>
            </div>

            <div className="hero-text">
              <div>
              <span>Conquiste </span>
              <span>seu</span>
              </div>
              <div><span>corpo ideal</span></div>
            </div>
        </div>
        <div className="direita-h">dir</div>
    </div>
  )
}

export default Hero