import React from 'react';
import './card.css'
import stars from '../../img/fivestars.jpg'

 const Card = (props) => {    
    const handleKartClick = () => {
        props.handleKartingProduct(props.id)

        props.setShowNotific('block')
        setTimeout(() => {
            props.setShowNotific('none');
        }, 3750);
    }

    return (
        <div class="card">
            <div class="card-img"><img src={props.img} class="img"></img></div>
            <div class="card-title">{ props.productTitle }</div>
            <div class="card-subtitle">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <div class="card-footer">
                <div class="card-price"><span>$</span>100</div>
                <button class="card-btn" onClick={handleKartClick}>
                    <i className="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
        </div>
    );
 }
  
 export default Card;