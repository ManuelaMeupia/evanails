import React, {useState} from 'react';

import './NavbarStyle.css';

function Navbar(){

    const [isOpen, setIsOpen] = useState(false);
    const Menu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="navStyle">
            <img src="img/logo1.png" alt="" className='logoStyle'/>
            <span className='titre'>EvaNails 💅</span>
            <button className="btnMenu" onClick={Menu}>☰</button>
            <div className={`lienMenu ${isOpen ? 'open' : ''}`}>
                <a href="#accueil"  className='lienNav'>Accueil</a>
                <a href="#contacter" className='lienNav'>Nous contacter</a>
                <a href="#services" className='lienNav'>Services</a>
                <a href="#galerie" className='lienNav'>Galerie</a> <br></br>
            </div>       
            <div className='btnAuth'>
                <div>
                    <p>Inscription</p>
                </div>
                 <div>
                    <p>Connexion</p>
                </div>
            </div>
        </nav>
    )
}



export default Navbar;
