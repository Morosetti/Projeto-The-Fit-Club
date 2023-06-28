import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

function Join() {
    const form = useRef()

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g1zpcgq', 'template_p1od16p', form.current, 'mGaxLkyRWJwgc6gbQ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className="Join" id="join-us">
            <div className="esq-j">
                <hr />
                <div>
                    <span className='stroke-text'>PRONTO PARA</span>
                    <span> EVOLUIR SEU</span>
                </div>
                <div>
                    <span>CORPO AO</span>
                    <span className='stroke-text'> NOSSO LADO?</span>
                </div>
            </div>
            <div className="dir-j">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" name='user_email' placeholder='Digite seu email' />
                    <button className='btn btn-j'>Junte-se já</button>
                </form>
            </div>
        </div>
    )
}

export default Join