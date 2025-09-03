import './NavbarStyle.css';

function Navbar(){
    return (
        <nav className="navStyle">
            <img src="img/logo1.png" alt="" className='logoStyle'/>
            <p className='welcomeStyle'>
                Bienvenue dans le site web officiel de EvaNails
            </p>
            <input type="search" placeholder='Cherchez un modele, une couleur ou une taille...' className='inputSearch'/>
        </nav>
    )
}

export default Navbar;