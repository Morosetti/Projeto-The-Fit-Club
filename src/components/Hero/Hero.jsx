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
                <span className='stroke-text'>Conquiste </span>
                <span>seu</span>
              </div>
              <div>
                <span>corpo ideal</span>
              </div>
              <div>
                <span>Aqui está a sua ajuda para chegar no seu corpo ideal, ter saúde e viver sua vida ao maximo.</span>
              </div>
            </div>
            <div className="figuras">
              <div>
                <span>+140</span>
                <span>Treinadores licenciados</span>
              </div>
              <div>
                <span>+978</span>
                <span>Membros cadastrados</span>
              </div>
              <div>
                <span>+50</span>
                <span>Treinos personalizados</span>
              </div>
            </div>
            <div className="hero-buttons">
              <buttons className="btn">Comece já</buttons>
              <buttons className="btn">Saiba mais</buttons>
            </div>
        </div>
        <div className="direita-h">dir</div>
    </div>
  )
}

export default Hero