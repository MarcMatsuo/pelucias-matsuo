import React from 'react';
import './footer.css'

const Footer = (props) => {
    return (
        <div className='footer'>
            <div>
                <h3>Pelúcias Matsuo</h3>
                <p className='italic'>Feito por Marcos Matsuo em 2023</p>
                <p className='bold'>TODAS AS INFORMAÇÕES NESSE SITE SÃO FICTÍCIAS</p>
            </div>
            <div>
                <p>Se quiser ver mais trabalhos meus: </p>
                <a className='footer-link linkedin' href='https://www.linkedin.com/in/marcos-m-matsuo-b782a7264/' target="_blank" rel='noopener noreferrer'>Linkedin</a>
                <a className='footer-link portfolio' href='https://github.com/MarcMatsuo' target="_blank" rel='noopener noreferrer'>Portfólio</a>
                <p>Por favor, me contratem</p>
            </div>
        </div>
    );
}
 
export default Footer;