import React, { useState } from 'react'
import './Depoimentos.css'
import {testimonialsData} from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

function Depoimentos() {

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
    return (
        <div className="Depoimentos">
            <div className="esquerda-e">
                <span>Depoimentos</span>
                <span className='stroke-text'>Opiniões</span>
                <span>dos nossos clientes</span>
                <span>
                    {testimonialsData[0].review}
                </span>
                <span>
                    <span style={{color: 'var(--orange'}}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="direita-d">
                <div></div>
                <div></div>
                
                <img src={testimonialsData[selected].image} alt="" />
                <div className="flecha">
                    <img 
                    onClick={() => {
                        selected === 0
                            ? setSelected (tLength - 1)
                            : setSelected ((prev) => prev - 1);
                    }}
                    src={leftArrow} alt="" />
                    <img 
                    onClick={() => {
                        selected === tLength - 1
                            ? setSelected (0)
                            : setSelected ((prev) => prev + 1);
                    }}
                    src={rightArrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Depoimentos