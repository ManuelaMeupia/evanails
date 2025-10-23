import './MenuLateralStyle.css';

import {FaWhatsappSquare} from 'react-icons/fa';

import React, { useState } from 'react';
import axios from 'axios';

function MenuLateral(){

    const API_URL = 'https://meups.lovestoblog.com/api_newsletter.php';
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
    });
    const [submissionMessage, setSubmissionMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setSubmissionMessage("Envoi en cours..."); 
        
        const params = new URLSearchParams();
        for (const key in formData) {
            params.append(key, formData[key]);
        }

        try {
            const response = await axios.post(API_URL, params);
            
            if (response.data.success) {
                 setSubmissionMessage(response.data.message); 
                 setFormData({ fullName: '', email: '', phone: '', message: '' }); 
            } else {
                 setSubmissionMessage(response.data.message); 
            }

        } catch (error) {
            console.error("Erreur de connexion ou API:", error);
            setSubmissionMessage("Erreur réseau. Impossible de contacter le serveur.");
        }
    };

     const Galerie = [
        {id:1, nom:'Construction resine', image:'/img/img1.jpg', prix: 6000, couleur: 'or, rose, blanc'},
        {id:2, nom:'Construction gel', image:'/img/img2.jpg', prix: 5000, couleur: 'noir, rose, marron'},
        {id:3, nom:'Construction polygel', image:'/img/img3.jpg', prix: 6000, couleur: 'blanc, noir, rose'},
        {id:4, nom:'Construction polygel', image:'/img/img4.jpg', prix: 6000, couleur: 'rouge, marron, noir, rose'},
        {id:5, nom:'Construction resine', image:'/img/img5.jpg', prix: 7000, couleur: 'or, marron'},
        {id:6, nom:'Construction polygel', image:'/img/img6.jpg', prix: 8000, couleur: 'rouge, blanc'},
        {id:7, nom:'Construction gel', image:'/img/img7.jpg', prix: 5000, couleur: 'rouge, blanc, rose'},
        {id:8, nom:'Construction polygel', image:'/img/img8.jpg', prix: 6000, couleur: 'rouge, noir'},
        {id:9, nom:'Construction polygel', image:'/img/img9.jpg', prix: 5000, couleur: 'blanc, violet'},
        {id:10, nom:'Construction resine', image:'/img/img10.jpg', prix: 7000, couleur: 'noir'},
        {id:11, nom:'Construction polygel', image:'/img/img11.jpg', prix: 5000, couleur: 'blanc, rose'},
        {id:12, nom:'Construction polygel', image:'/img/img12.jpg', prix: 5000, couleur: 'orange'},
        {id:13, nom:'Construction polygel', image:'/img/img13.jpg', prix: 7000, couleur: 'blanc, rose'},
        {id:14, nom:'Construction gel', image:'/img/img14.jpg', prix: 7000, couleur: 'bleu, blanc, rose'},
        {id:15, nom:'Construction polygel', image:'/img/img15.jpg', prix: 6000, couleur: 'bleu, blanc, rose'},
        {id:16, nom:'Construction polygel', image:'/img/img16.jpg', prix: 5000, couleur: 'jaune, bleu, vert, rouge'},
        {id:17, nom:'Construction polygel', image:'/img/img17.jpg', prix: 6000, couleur: 'marron, orange'},
        {id:18, nom:'Construction polygel', image:'/img/img18.jpg', prix: 7000, couleur: 'blanc, rose'},
        {id:19, nom:'Construction resine', image:'/img/img19.jpg', prix: 5000, couleur: 'noir'},
        {id:20, nom:'Construction resine', image:'/img/img20.jpg', prix: 8000, couleur: 'orange, or'},
        {id:21, nom:'Construction polygel', image:'/img/img21.jpg', prix: 5000, couleur: 'noir'},
        {id:22, nom:'Construction polygel', image:'/img/img22.jpg', prix: 5000, couleur: 'orange, vert'},
        {id:23, nom:'Construction gel', image:'/img/img23.jpg', prix: 6000, couleur: 'rouge, vert'},
        {id:24, nom:'Construction polygel', image:'/img/img24.jpg', prix: 7000, couleur: 'noir, rouge'},
        {id:25, nom:'Gainage', image:'/img/img25.jpg', prix: 5000, couleur: 'orange, vert'},
        {id:26, nom:'Construction resine', image:'/img/img26.jpg', prix: 12000, couleur: 'marron, noir'},
        {id:27, nom:'Gainage' , image:'/img/img27.jpg', prix: 5000, couleur: 'marron'},
        {id:28, nom:'Construction polygel', image:'/img/img28.jpg', prix: 6000, couleur: 'rouge'},
        {id:29, nom:'Construction polygel', image:'/img/img29.jpg', prix: 5000, couleur: 'jaune, orange, rose'},
        {id:30, nom:'Construction resine', image:'/img/img30.jpg', prix: 6000, couleur: 'or, rose, noir'},
        {id:31, nom:'Construction polygel', image:'/img/img31.jpg', prix: 6000, couleur: 'or, marron, rose'},
        {id:32, nom:'Construction polygel', image:'/img/img32.jpg', prix: 5000, couleur: 'orange, vert, blanc'},
        {id:33, nom:'Construction gel', image:'/img/img33.jpg', prix: 5000, couleur: 'rouge, blanc'},
        {id:34, nom:'Construction polygel', image:'/img/img34.jpg', prix: 6000, couleur: 'orange, marron'},
        {id:35, nom:'Construction gel', image:'/img/img35.jpg', prix: 5000, couleur: 'noir, rose'},
        {id:36, nom:'Construction polygel', image:'/img/img36.jpg', prix: 5000, couleur: 'rouge'},
        {id:37, nom:'Construction polygel', image:'/img/img37.jpg', prix: 5000, couleur: 'blanc, noir, vert'},
        {id:38, nom:'Construction polygel', image:'/img/img38.jpg', prix: 5000, couleur: 'blanc, or'},
        {id:39, nom:'Construction polygel', image:'/img/img39.jpg', prix: 5000, couleur: 'noir, rose'},
        {id:40, nom:'Construction polygel', image:'/img/img40.jpg', prix: 5000, couleur: 'noir, blanc,rose'},
        {id:41, nom:'Construction polygel', image:'/img/img41.jpg', prix: 5000, couleur: 'marron'},
        {id:42, nom:'Construction polygel', image:'/img/img42.jpg', prix: 5000, couleur: 'marron'},
        {id:43, nom:'Construction polygel', image:'/img/img43.jpg', prix: 5000, couleur: 'rose'},
        {id:44, nom:'Construction polygel', image:'/img/img44.jpg', prix: 5000, couleur: 'marron foncé'},
        {id:45, nom:'Construction polygel', image:'/img/img45.jpg', prix: 5000, couleur: 'rouge'},
        {id:46, nom:'Construction polygel', image:'/img/img46.jpg', prix: 5000, couleur: 'blanc, rouge'},
        {id:47, nom:'Construction polygel', image:'/img/img47.jpg', prix: 5000, couleur: 'blanc, rose'},
        {id:48, nom:'Construction polygel', image:'/img/img48.jpg', prix: 5000, couleur: 'orange'},
        {id:49, nom:'Construction polygel', image:'/img/img49.jpg', prix: 5000, couleur: 'rouge, marron,noir, rose'},
        {id:50, nom:'Construction polygel', image:'/img/img50.jpg', prix: 5000, couleur: 'blanc, rose'},
        {id:51, nom:'Construction polygel', image:'/img/img51.jpg', prix: 5000, couleur: 'noir, marron'},
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
                        <h3 className='servicesTitres' style={{fontFamily: 'Lucida Handwriting', borderBottom: '2px solid rgba(250, 50, 84, 0.3)', display: 'inline-block'}}>Pedicure</h3>
                        <p>
                            <ul className='liste'>
                            <p>Lavage</p>
                            <p>gommage</p>
                            <p>Massage</p>
                            <p>pedicure chaude et froide</p> 
                            </ul>
                        </p>
                    </div>
                    <div className='service'> 
                        <h3 style={{fontFamily: 'Lucida Handwriting', borderBottom: '2px solid rgba(250, 50, 84, 0.3)', display: 'inline-block'}}>Manicure</h3>
                        <ul className='liste'>
                            <p>Manicure classique</p>
                            <p>Manicure francaise</p>
                            <p>Nail art</p>
                            <p>Manicure semipermanante</p>
                        </ul>
                       
                    </div>
                    <div className='service'> 
                        <h3 style={{fontFamily: 'Lucida Handwriting', borderBottom: '2px solid rgba(250, 50, 84, 0.3)', display: 'inline-block'}}>Coiffure</h3>
                        <ul className='liste'>
                            <p>Rasta</p>
                            <p>Passes meches</p>
                            <p>Nattes simples</p>
                            <p>Tout ce qui est tendance, sauf les perruques</p>
                        </ul>
                    </div>
                    <div className='service'> 
                        <h3 style={{fontFamily: 'Lucida Handwriting', borderBottom: '2px solid rgba(250, 50, 84, 0.3)', display: 'inline-block'}}>make Up</h3>
                        <ul className='liste'>
                            <p>Jour</p>
                            <p>Soir</p>
                            <p>Grand soir</p>
                            <p>Mise en beauté</p>
                        </ul>

                    </div>
                </div>
               
            </section>

            <section id="contacter" className='contacterStyle'>
                <h1 className='titreSection4'>Nous contacter</h1>
                <div className='newsletter'>
                    <form className='newsletter' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="fullName"  className='messages'>Nom et Prenom:</label>
                            <input type="text" className='inputs ' id='fullName' name='fullName' value={formData.fullName} onChange={handleChange} required/>
                        </div>
                        <div>
                            <label htmlFor="email" className='messages'>Adresse mail:</label>
                            <input type="email" className='inputs' id='email' name='email' value={formData.email} onChange={handleChange} required/> 
                        </div>
                        <div>
                            <label htmlFor="phone" className='messages'>Numero de telephone:</label>
                            <input type="number" className='inputs' id='phone' name='phone' value={formData.phone} onChange={handleChange} required/>
                        </div><br />
                        <div>
                            <label htmlFor="message" className='messages'>Votre message:</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} className='inputs ' id="message" ></textarea>
                        </div>
                        <button type="submit">Envoyer</button>
                        <p className="submission-status" style={{textAlign:"center", marginTop: '10px'}}>{submissionMessage}</p>
                    </form>
                </div>
            </section>
               
            
        </div>
    )
}

export default MenuLateral;
