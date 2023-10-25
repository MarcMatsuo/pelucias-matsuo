import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to="/"><h1 className='header-img'>Pelucias Matsuo</h1></Link>
            <Link to="/carrinho"><i className="fa-solid fa-cart-shopping"></i></Link>
        </div>
    );
}
 
export default Header;