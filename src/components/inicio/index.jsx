import React from 'react';
import './inicio.css'
import AfterCard from '../afterCard';
import { Link } from 'react-router-dom';
import video from '../../video/background.mp4'
import Header from '../header';

const Inicio = () => {
    return (
        <div className="inicio">
            <div className='inicio-start'>
                <div className='inicio-header'>
                    <Header />
                </div>
                <video className='inicio-start-video' src={video} loop muted autoPlay></video>
                <h2 className='inicio-h2'>Bem vindo ao maior site de pelúcias do planeta!</h2>
                <Link to='produtos'><button className='after-card-button inicio-button'>Ir a loja</button></Link>
            </div>
            <div className='inicio-after'>
                <p className='inicio-after-phrase'>
                    "Após dormir abraçado uma noite com eles, eu tive a certeza que eles tem a melhor qualidade do mercado." <br /> -John Pelucy, o criador das pelucias.
                </p>
            <AfterCard path={'produtos'} img={'img1'} h1="Veja os nossos produtos!">
                Para que quer demonstrar ter um estilo de vida radical, <br /> nada melhor do que nossa linhas de pelucias.
            </AfterCard>

            <AfterCard path={'error'} img={'img2'} h1="Veja quem nos recomenda!"> 
                "Com eles eu possuo as melhores noites de sono" <br /> -The Rock
            </AfterCard>
            </div>
        </div>
    );
}
 
export default Inicio;