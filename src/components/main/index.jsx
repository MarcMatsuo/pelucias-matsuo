import React, { useState } from 'react';
import Card from '../card/index';
import { list } from '../../list';
import './Main.css'
import Header from '../header';

const Main = () => {
    let kartItems = JSON.parse(localStorage.getItem("kartList")) || []

    const handleKartingProduct = (t) => {
        let exist = false;

        kartItems.forEach(element => {
            if (t === element.id){
                    element.quant += 1;
                    localStorage.setItem('kartList', JSON.stringify(kartItems))
                    exist = true;
                }
        })

        if (exist !== true){
            kartItems.push({
                id: t,
                quant: 1
            })
            localStorage.setItem('kartList', JSON.stringify(kartItems))
            
        }

        console.log(kartItems)
    }

    const [showNotific, setShowNotific] = useState('none');

    function handleSectionProducts(sectionType){
        const renderProducts = [];
        list.forEach((element) => {
            if(sectionType === 'maisVendidos'){
                if (element.maisVendido == true){
                    renderProducts.push(<Card setShowNotific={setShowNotific} handleKartingProduct={handleKartingProduct} id={element.id} productTitle={element.nome} img={element.img}/>)
                }
            }
            else if (element.category === sectionType){
               renderProducts.push(<Card setShowNotific={setShowNotific} handleKartingProduct={handleKartingProduct} id={element.id} productTitle={element.nome} img={element.img}/>)
            }
        });
        return renderProducts;
    }
    

    return (
        <div className='main'>
            <Header />

            <p className='addNotific' style={{display: showNotific}}>Produto adicionado ao carrinho!</p>

            <div className='main-section'>
                <h2 className='main-section-title'>Mais vendidos</h2>
                <div className="main-section-products">
                    {handleSectionProducts('maisVendidos')}
                </div>
            </div>
            <div className='main-section'>
                <h2 className='main-section-title'>Cachorrinhos</h2>
                <div className="main-section-products">
                    {handleSectionProducts('cachorro')}
                </div>
            </div>
            <div className='main-section'>
                <h2 className='main-section-title'>Personagens</h2>
                <div className="main-section-products">
                    {handleSectionProducts('personagem')}
                </div>
            </div>
            <div className='main-section'>
                <h2 className='main-section-title'>Mais produtos</h2>
                <div className="main-section-products">
                    {handleSectionProducts('maisVendidos')}
                </div>
            </div>
        </div>
    );
}
 
export default Main;