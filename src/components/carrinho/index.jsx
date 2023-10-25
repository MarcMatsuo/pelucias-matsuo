import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Carrinho.css'
import KartCard from '../kartCard';
import { list } from '../../list';
import Header from '../header';
import { v4 as uuidv4 } from 'uuid';

const Carrinho = () => {    
    const [listaDoCarrinho, setListaDoCarrinho] = useState(popularListaDoCarrinho())
    const [quantidadeDeProdutos, setQuantidadeDeProdutos] = useState(contadorDeProdutos())

    function AtualizarListaDoCarrinho(){
        setListaDoCarrinho(popularListaDoCarrinho())
    }

    function popularListaDoCarrinho(){
        let kartItems = JSON.parse(localStorage.getItem("kartList")) || []
        let listaDoCarrinho = []
        kartItems.forEach((element) => {
            listaDoCarrinho.push(
                <KartCard 
                    img={list[element.id - 1].img} 
                    nome={list[element.id - 1].nome} 
                    quant={element.quant}
                    id={element.id}
                    AtualizarListaDoCarrinho={AtualizarListaDoCarrinho}
                    atualizarContadorDeProdutos={atualizarContadorDeProdutos}
                />
            )
        })
        return listaDoCarrinho
    }

    function atualizarContadorDeProdutos(){
        setQuantidadeDeProdutos(contadorDeProdutos)
    }

    function contadorDeProdutos(){
        let quantidade = 0
        let kartItems = JSON.parse(localStorage.getItem("kartList")) || []
        kartItems.forEach((element) => {
            quantidade += element.quant
        })

        return quantidade;
    }

    return (
        <div className='carrinho-produtos'>
            <Header />
            <div className='carrinho-header'>
                <Link to="/produtos"><button className='carrinho-footer-button carrinho-header-button'><i className="fa-solid fa-arrow-left"></i> Voltar a loja</button></Link>
               <h1>Carrinho de compras</h1>
            </div>

            <div className='carrinho-lista'>
                {listaDoCarrinho}
            </div>

            <div className='carrinho-footer'>    
                <p className='carrinho-compra-text'>${quantidadeDeProdutos * 100} <br/> {quantidadeDeProdutos} produtos</p>
                <Link to="/thanks"><button className='carrinho-footer-button'>Finalizar compra</button></Link>
            </div>
        </div>
    );
}
 
export default Carrinho;