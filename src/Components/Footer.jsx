import './FooterStyle.css';
import {AiFillHome} from 'react-icons/ai';
import {IoMdPhotos, IoMdMail } from 'react-icons/io';
import {MdCleaningServices } from 'react-icons/md';
import {FaWhatsapp, FaFacebook, FaInstagramSquare, FaSnapchat, FaTiktok} from 'react-icons/fa';

function Footer (){
    return (
        <footer className='foot'>
            <div className='info'>
                <h3 style={{color:"orangered"}}>Nos coordonnées</h3>
                <p>Yaoundé-Cameroun</p>
                <p>Soa, Fokou</p>
                <p>+237 654 872 263</p>
                <p>evamatene305@gmail.com</p>
            </div>
            
            <div className='rs' >
                <h3 style={{color:"orangered"}}>Nos réseaux sociaux</h3>
                <a style={{textDecoration:"none"}} href="https://www.facebook.com/melodie.eva.993317" target="_blank" rel="noopener noreferrer"><p><FaFacebook/> Facebook</p></a>
                <a style={{textDecoration:"none"}} href="https://www.instagram.com/melodyeva94?igsh=NGQ0bWFvdWFrdGps" target="_blank" rel="noopener noreferrer"><p><FaInstagramSquare/> Instagram</p></a>
                <a style={{textDecoration:"none"}} href="https://wa.me/237654872263" target="_blank" rel="noopener noreferrer"><p><FaWhatsapp/> WhatsApp</p></a>
                <a style={{textDecoration:"none"}} href="https://www.snapchat.com/add/evamatene?share_id=BSeurovxqFo&locale=fr-FR" target="_blank" rel="noopener noreferrer"><p><FaSnapchat/> Snapchat</p></a>
                <a style={{textDecoration:"none"}} href="https://www.tiktok.com/@evanails60?_t=ZM-90ml1Bx2qgG&_r=1 " target="_blank" rel="noopener noreferrer"><p><FaTiktok/> TikTok</p></a>
            </div>

            <div className='liensRapides'>
                <h3 style={{color:"orangered"}}>Liens rapides</h3>
                <a href="#accueil" className='lienNav'><AiFillHome/> Accueil</a>
                <a href="#galerie" className='lienNav'><IoMdPhotos/> Galerie</a>
                <a href="#services" className='lienNav'> <IoMdMail/>Services</a>
                <a href="#contacter" className='lienNav'> <MdCleaningServices/>Contacter</a>
            </div>
            <p className="copyright">&copy; Copyright EvaNails {new Date().getFullYear()}. Tous droits réservés.</p>
        </footer>
    )
}

export default Footer;