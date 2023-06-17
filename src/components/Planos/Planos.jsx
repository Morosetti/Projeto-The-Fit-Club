import React from 'react';
import './Planos.css';
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

function Planos() {
    return (
        <div className='planos-container'>
            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className='stroke-text'>COMECE SUA</span>
                <span>JORNADA</span>
                <span className='stroke-text'>CONOSCO</span>
            </div>

            <div className="planos">
                {plansData.map((plano, i)=> (
                    <div className="plano" key={i}>
                        {plano.icon}
                        <span>{plano.name}</span>
                        <span>R${plano.price}</span>

                        <div className="features">
                            {plano.features.map((feature, i)=> (
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        
                        <div>
                            <span>Veja mais beneficios</span>
                        </div>
                        <button className="btn">Inscreva-se já</button>
                    </div>
                    
                ))}
            </div>

        </div>
    );
}

export default Planos;
