

import './FooterStyle.css'

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
        </footer>
    )
}

export default Footer;