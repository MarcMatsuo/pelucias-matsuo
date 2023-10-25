import React from 'react';
import './kartCard.css'

const KartCard = (props) => {
    let kartItems = JSON.parse(localStorage.getItem("kartList")) || []

    const handleDeleteProduct = () => {
        kartItems.forEach( (element) => {
            if(element.id === props.id){
                kartItems.splice(kartItems.indexOf(element), 1)
                localStorage.setItem("kartList", JSON.stringify(kartItems))
            }
        })

        props.AtualizarListaDoCarrinho()
        props.atualizarContadorDeProdutos()
    }

    const handleQuantProduct = (inputElement) => {
        kartItems.forEach( (element) => {
            if(element.id === props.id){
                element.quant = parseInt(inputElement.target.value)
                localStorage.setItem("kartList", JSON.stringify(kartItems))
            }
        })

        props.atualizarContadorDeProdutos()
    }

    return (        
    <div className="kartCard card">
        <div className="card-img"><img src={props.img} className="img"></img></div>
        <div className='card-informations'>
            <div className="card-title">{props.nome}</div>
            <div className="card-subtitle">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <div className="card-price">$100</div>
        </div>
        <div className="kartCard-buttons">
            <div className='input-quant'>
                <span>Quant: </span>
                <input onChange={handleQuantProduct} className='input-number' min={1} type="number" defaultValue={props.quant} name="" id="" />
            </div>
            <i onClick={handleDeleteProduct} className="fa-solid fa-trash icon-trash"></i>
        </div>
    </div>);
}
 
export default KartCard;