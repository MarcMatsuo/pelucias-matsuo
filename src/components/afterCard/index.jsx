import React from 'react';
import './afterCard.css'
import { Link } from 'react-router-dom';

import img1 from '../../img/background1.jpg'
import img2 from '../../img/background2.png'

const AfterCard = (props) => {
    let image = props.img === 'img1' ? img1 : img2

    return (
        <div>
            <div className='inicio-after-card' style={{backgroundImage: `url("${image}")`}}>
                <h3 className='inicio-after-card-title'>{props.h1}</h3>
                <p className='inicio-after-card-text'>{props.children}</p>
                <Link to={props.path}><button className='after-card-button'>Ver tudo</button></Link>
            </div>
        </div>
    );
}
 
export default AfterCard;