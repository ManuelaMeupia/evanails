import React, {useState} from 'react';
import {AiFillHome} from 'react-icons/ai';
import {IoMdPhotos, IoMdMail } from 'react-icons/io';
import {MdCleaningServices } from 'react-icons/md';

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
                <a href="#accueil"  className='lienNav'> <AiFillHome className='icon'/>Accueil</a>
                <a href="#galerie" className='lienNav'> <IoMdPhotos className='icon'/>Galerie</a>
                <a href="#services" className='lienNav'> <MdCleaningServices className='icon'/>Services</a>
                <a href="#contacter" className='lienNav'><IoMdMail className='icon'/>Contacter</a>
                   
            <div className='btnAuth'>
                <div className='login1'>
                    <p>Inscription</p>
                </div>
                 <div className='login2'>
                    <p>Connexion</p>
                </div>
            </div>
            </div>
        </nav>

        
    )
}



export default Navbar;
