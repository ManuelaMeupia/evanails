

import './MenuLateralStyle.css';
import { Link } from 'react-router-dom';

function MenuLateral(){
    return (
        <aside className='barreGauche'>
            <Link to="/">Accueil</Link>
            <Link to="/apropos">A propos</Link>
            <Link to="/contacter">Nous contacter</Link>
        </aside>
    )
}

export default MenuLateral;