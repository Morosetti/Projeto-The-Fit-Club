import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"

const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
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
              <button className="btn">Comece já</button>
              <button className="btn">Saiba mais</button>
            </div>
        </div>
        <div className="direita-h">
          <button className="btn">Junte-se já</button>

          <div className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span><span>110 bpm</span>
          </div>
          <img src={hero_image} alt="" className="hero-image" />
          <img src={hero_image_back} alt="" className="hero-image-back" />
          <div className="calories">
            <img src={Calories} alt="" />
            <div>
            <span>Calorias Queimadas</span>
            <span>250 kcal</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero