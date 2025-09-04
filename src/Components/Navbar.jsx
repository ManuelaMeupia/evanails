import { Link } from 'react-router-dom';
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
            {/* <p className='welcomeStyle'>
                Bienvenue dans le site web officiel de EvaNails
            </p> */}
            {/* <input type="search" placeholder='Cherchez un modele, une couleur ou une taille...' className='inputSearch' onClick={BarreRecherche}/> */}
            <button className="btnMenu" onClick={Menu}>☰</button>
            <div className={`lienMenu ${isOpen ? 'open' : ''}`}>
                <Link to="/" className='lienNav'>Accueil</Link>
                <Link to="/apropos" className='lienNav'>A propos</Link>
                <Link to="/contacter" className='lienNav'>Nous contacter</Link>
                <Link to="/" className='lienNav'>Services</Link>
                <Link to="/" className='lienNav'>Galerie</Link> 
            </div>       
        </nav>
    )
}

export default Navbar;