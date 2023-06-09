import React from 'react'
import './Motivos.css'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"

function Motivos() {
    return (
        <div className="Motivos" id='motivos'>
            <div className="esquerda-m">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
                </div>
            <div className="direita-m">
                <span>razões</span>
                <div>
                    <span className='stroke-text'>porque</span>
                    <span> escolher?</span>
                </div>

                <div className='detalhes-m'>
                    <div>
                        <img src={tick} alt=""></img>
                        <span>MAIS DE 50 TREINADORES ESPECIALIZADOS</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>TREINE EFICIENTEMENTE COM SEGURANÇA</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>1 PROGRAMA DE TREINO GRÁTIS PARA NOVO MEMBRO</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>PATROCINADORES CONFIÁVEIS</span>
                    </div>
                </div>
                <span style={{color: "gray", fontWeight: "normal",}}>NOSSOS PARCEIROS</span>
                <div className="parceria">
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Motivos