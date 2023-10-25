import React from 'react';
import './Thanks.css';
import kartGif from '../../img/kart.gif'
import Header from '../header';

const Thanks = () => {
    localStorage.setItem('kartList', '[]')
    return (
        <div className='thanks'>
            <Header />
            <div className='thanks-main'>
                <p>Obrigado pela compra!</p>
               <img src={kartGif} alt="" />
            </div>
        </div>
    );
}
 
export default Thanks;