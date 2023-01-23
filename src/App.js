import { Header } from './components/Header';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sass/accueil.scss'


const App = () => {

  const navigate = useNavigate();

  return (
    <div className="acceuils">
            <main>
                <div className="acceuil container">
                    <Header isHome={true}/>
                    <div className="card_wrapper">
                        <div className="card_order card_menu">
                            <div onClick={() => navigate("/pizzas")} className="card_container">
                                <i className="fa-solid fa-truck-fast"></i>
                                <hr/>
                                <h2>Nouvelle Commande</h2>
                                <p>Créer et enregistrer une nouvelle commande</p>
                            </div>
                        </div>
                        <div className="card_order_list card_menu">
                            <div className="card_container" onClick={() => navigate('/orderlist')}>
                                <i className="fa-solid fa-fire-flame-curved"></i>
                                <hr/>
                                <h2>Commande en Cours</h2>
                                <p>Voir le détail des commandes en cours</p>
                            </div>
                        </div>
                        <div className="card_payment card_menu">
                            <div href="" onClick="" className="card_container">
                                <i className="fa-solid fa-euro-sign"></i>
                                <hr/>
                                <h2>Paiement commande</h2>
                                <p>Encaisser une commande</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
  )
}

export default App;
