import React from 'react';
import Header from '../header';
import './error.css'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <Header />
            <div className='error-main'>
                <h1>Erro PCPFP</h1>
                <p>Programador com preguiça de fazer essa página</p>
                <Link to="/"><button className='error-main-back'><i className="fa-solid fa-arrow-left"></i> Voltar a loja</button></Link>
            </div>
        </div>
    );
}
 
export default Error;