import './MenuLateralStyle.css';

import {FaWhatsappSquare} from 'react-icons/fa';

function MenuLateral(){

     const Galerie = [
        {id:1, nom:'Construction gel', image:'/img/img1.jpg', prix: 5000, couleur: 'or, rose, blanc'},
        {id:2, nom:'Construction gel', image:'/img/img2.jpg', prix: 5000, couleur: 'noir, rose, marron'},
        {id:1, nom:'Construction gel', image:'/img/img3.jpg', prix: 5000, couleur: 'blanc, noir, rose'},
        {id:1, nom:'Construction gel', image:'/img/img4.jpg', prix: 5000, couleur: 'rouge, marron, noir, rose'},
        {id:1, nom:'Construction gel', image:'/img/img5.jpg', prix: 5000, couleur: 'or, marron'},
        {id:1, nom:'Construction gel', image:'/img/img6.jpg', prix: 5000, couleur: 'rouge, blanc'},
        {id:1, nom:'Construction gel', image:'/img/img7.jpg', prix: 5000, couleur: 'rouge, blanc, rose'},
        {id:1, nom:'Construction gel', image:'/img/img8.jpg', prix: 5000, couleur: 'rouge, noir'},
        {id:1, nom:'Construction gel', image:'/img/img9.jpg', prix: 5000, couleur: 'blanc, violet'},
        {id:1, nom:'Construction gel', image:'/img/img10.jpg', prix: 5000, couleur: 'noir'},
        {id:1, nom:'Construction gel', image:'/img/img11.jpg', prix: 5000, couleur: 'blanc, rose'},
        {id:1, nom:'Construction gel', image:'/img/img12.jpg', prix: 5000, couleur: 'orange'},
        {id:1, nom:'Construction gel', image:'/img/img13.jpg', prix: 5000, couleur: 'blanc, rose'},
        {id:1, nom:'Construction gel', image:'/img/img14.jpg', prix: 5000, couleur: 'bleu, blanc, rose'},
        {
            id:1,
            nom:'Construction gel',
            image:'/img/img15.jpg',
            prix: 5000,
            couleur: 'bleu, blanc, rose'},
        {
            id:1,
            nom:'Construction gel',
            image:'/img/img16.jpg',
            prix: 5000,
            couleur: 'jaune, bleu, vert, rouge'
        },
       {
            id:1,
            nom:'Construction gel',
            image:'/img/img17.jpg',
            prix: 5000,
            couleur: 'marron, orange'
        },
       {
            id:1,
            nom:'Construction gel',
            image:'/img/img18.jpg',
            prix: 5000,
            couleur: 'blanc, rose'
        },
       {
            id:1,
            nom:'Construction gel',
            image:'/img/img19.jpg',
            prix: 5000,
            couleur: 'noir'
        },
       {
            id:1,
            nom:'Construction gel',
            image:'/img/img20.jpg',
            prix: 5000,
            couleur: 'orange, or'
        },
       {
            id:1,
            nom:'Construction gel',
            image:'/img/img21.jpg',
            prix: 5000,
            couleur: 'noir'
        },
       {
            id:1,
            nom:'Construction gel',
            image:'/img/img22.jpg',
            prix: 5000,
            couleur: 'orange, vert'
        },
       {
            id:1,
            nom:'Construction gel',
            image:'/img/img23.jpg',
            prix: 5000,
            couleur: 'rouge, vert'
        },
       {
            id:1,
            nom:'Construction gel',
            image:'/img/img24.jpg',
            prix: 5000,
            couleur: 'noir, rouge'
        },
       {
            id:1,
            nom:'Construction gel',
            image:'/img/img25.jpg',
            prix: 5000,
            couleur: 'orange, vert'
        },
       {
            id:1,
            nom:'Construction gel',
            image:'/img/img26.jpg',
            prix: 5000,
            couleur: 'marron, noir'
        },
       {
            id:1,
            nom:'Construction gel',
            image:'/img/img27.jpg',
            prix: 5000,
            couleur: 'marron'
        },
       {
            id:1,
            nom:'Construction gel',
            image:'/img/img28.jpg',
            prix: 5000,
            couleur: 'rouge'
        },
       {
            id:1,
            nom:'Construction gel',
            image:'/img/img29.jpg',
            prix: 5000,
            couleur: 'jaune, orange, rose'
        },
       {
            id:1,
            nom:'Construction gel',
            image:'/img/img30.jpg',
            prix: 5000,
            couleur: 'or, rose, noir'
        },
       {
            id:1,
            nom:'Construction gel',
            image:'/img/img31.jpg',
            prix: 5000,
            couleur: 'or, marron, rose'
        },
       {
            id:1,
            nom:'Construction gel',
            image:'/img/img32.jpg',
            prix: 5000,
            couleur: 'orange, vert, blanc'
        },
       {
            id:1,
            nom:'Construction gel',
            image:'/img/img33.jpg',
            prix: 5000,
            couleur: 'rouge, blanc'
        },
       {
            id:1,
            nom:'Construction gel',
            image:'/img/img34.jpg',
            prix: 5000,
            couleur: 'orange, marron'
        },
       {
            id:1,
            nom:'Construction gel',
            image:'/img/img35.jpg',
            prix: 5000,
            couleur: 'noir, rose'
        },
       {
            id:1,
            nom:'Construction gel',
            image:'/img/img36.jpg',
            prix: 5000,
            couleur: 'rouge'
        },
       {
            id:1,
            nom:'Construction gel',
            image:'/img/img37.jpg',
            prix: 5000,
            couleur: 'blanc, noir, vert'
        },
       {
            id:1,
            nom:'Construction gel',
            image:'/img/img38.jpg',
            prix: 5000,
            couleur: 'blanc, or'
        },
         {
            id:1,
            nom:'Construction gel',
            image:'/img/img39.jpg',
            prix: 5000,
            couleur: 'blanc, rose'
        },
       
    ]


    return (
        
       <div>

            <div className="div-btnWa">
                    <a href="https://wa.me/+237654872263"> <FaWhatsappSquare className='whatsapp'/></a>
            </div>
            <section id="accueil" className='accueilStyle'>
                    <br /><br /><br /><br /><br /><br />
                    <div className='divAccueil'>
                        <p className='welcomeSection1'> <h1>Bienvenue dans le site officiel de <b style={{color:"orange", fontFamily:"Lucida Handwriting"}}>EvaNails</b></h1></p><br /><br />
                        <p className='texte1'>Découvrez l'art de la beauté des ongles dans une ambiance chaleureuse et raffinée. Chez EvaNails, nous transformons vos mains et pieds en de véritables œuvres d'art avec un savoir-faire exceptionnel et des produits de qualité supérieure.</p>
                        <div className='rdv'>Prendre rendez-vous</div>
                    </div>
                <br /><br /><br /><br /><br /><br />
            </section>

            <section id="galerie" className='galerieStyle'>
                <h1 className='galerieh1'>Galerie d'images</h1>
                <div className="tableau-body">
                    {Galerie.map((nails) => (
                        <div key={nails.id} className="tableau-row">
                            <div className="tableauImg">
                                <img src={nails.image} alt={nails.nom} className='imgStyle' />
                            </div>
                            <div className="details" style={{color: "rgb(251, 59, 91)", marginTop: "7px",fontWeight:"bold"}}>{nails.nom}</div>
                            <div className="details" style={{fontWeight:"bold"}}>{nails.prix} FCFA</div>
                            <div className="details" style={{color:"#807373ff", flexWrap:"wrap"}}>{nails.couleur}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="services" className='services'>
                <h1 className='serviceh1'>Services</h1>
                <div className='serviceStyle'>
                     <div className='service'> 
                        <h3 className='servicesTitres'>Pedicure</h3>
                    </div>
                    <div className='service'> 
                        <h3>Manicure</h3>
                    </div>
                    <div className='service'> 
                        <h3>Coiffure</h3>
                    </div>
                    <div className='service'> 
                        <h3>make Up</h3>
                    </div>
                </div>
               
            </section>

            <section id="contacter" className='contacterStyle'>
                <h1 className='titreSection4'>Nous contacter</h1>
                <div className='newspaper'>
                    <label htmlFor="" >Nom et Prenom:</label>
                    <input type="text" required/>
                    <label htmlFor="">Adresse mail:</label>
                    <input type="text" required/>
                    <label htmlFor="">Numero de telephone:</label>
                    <input type="text" required/> <br />
                    <label htmlFor="">Votre message:</label>
                    <textarea name="" id=""></textarea>
                    <button type="button">Envoyer</button>
                    <p>Nous recevrons votre demande</p>
                </div>
                
            </section>
               
            
        </div>
    )
}

export default MenuLateral;
