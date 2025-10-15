

import './FooterStyle.css';

import {AiFillHome} from 'react-icons/ai';
import {IoMdPhotos, IoMdMail } from 'react-icons/io';
import {MdCleaningServices } from 'react-icons/md';

function Footer (){
    return (
        <footer className='foot'>
            <div>
                <p>Yaounde-Cameroun</p>
                <p>Soa, Fokou</p>
                <p>+237 654 872 263</p>
                <p>&copy; Copyright EvaNails {new Date().getFullYear()}. Tous droits réservés.</p>
            </div>
            <div>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>WhatsApp</p>
                <p>Snapchat</p>
            </div>
            <div className='liensRapides'>
                <a href="#accueil"  className='lienNav'> <AiFillHome className='icon'/>Accueil</a><br />
                <a href="#galerie" className='lienNav'> <IoMdPhotos className='icon'/>Galerie</a><br />
                <a href="#services" className='lienNav'> <MdCleaningServices className='icon'/>Services</a><br />
                <a href="#contacter" className='lienNav'><IoMdMail className='icon'/>Contacter</a><br />
            </div>
        </footer>
    )
}

export default Footer;