import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import { motion } from 'framer-motion'

function Hero() {
  const transition = {type: 'spring', duration: 3}
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
        <div className="esquerda-h">
            <Header/>
            
            <div className="propaganda">
              <motion.div initial = {{left: '228px'}} whileInView={{left: '35px'}} transition={{...transition, type: 'tween'}}></motion.div>
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

          <motion.div initial={{right: '-1rem'}} whileInView={{right: '4rem'}} transition={transition} className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span><span>110 bpm</span>
          </motion.div>
          <img src={hero_image} alt="" className="hero-image" />
          <motion.img initial={{right: '11rem'}} whileInView={{right: '20rem'}} transition={transition} src={hero_image_back} alt="" className="hero-image-back" />
          <motion.div initial={{right: '37rem'}} whileInView={{right: '28rem'}} transition={transition} className="calories">
            <img src={Calories} alt="" />
            <div>
            <span>Calorias Queimadas</span>
            <span>250 kcal</span>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Hero