// import { render } from "@testing-library/react";
import { useNavigate } from 'react-router-dom';
import Pizza from './Pizza';
import { add, complete, remove } from '../slices';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import React from 'react';






const Acceuil = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const [order, setOrder] = useState("");


    const newOrder = () => {
        const id = Date.now();
        dispatch(add(id));
        navigate(`/pizzas/${id}`);
    }

    return (
        <div className="acceuils">

            <main>
                <div className="acceuil">

                    <div className="title">
                    <img src={""} alt="" />
                        <h1>Bienvenue chez Fred-dy's</h1>
                    
                        
                    </div>

                    <div className="btn">

                        <div className="new_commande ">
                                <div onClick={() => newOrder()} className="new_commade-lien">
                                    <i className="fa-solid fa-truck-fast"></i>
                                    <h1>Nouvelle Commande</h1>
                                    <hr />
                                    <p>Créer et enregistrer une nouvelle commande</p>
                                </div>
                        </div>

                        <div className="processing_commande">
                            <div href="" onClick={() => navigate("/")} className="processing_commande-lien">
                                <i className="fa-solid fa-fire-flame-curved"></i>
                                <h1>Commande en Cours</h1>
                                <hr />
                                <p>Voir le détail des commandes en cours</p>
                            </div>
                        </div>

                        <div className="payment_commande">
                            <div href="" onClick={() => navigate("/")} className="payment_commande-lien">
                                <i className="fa-solid fa-euro-sign"></i>
                                <h1>Paiement de commande</h1>
                                <hr />
                                <p>Encaisser une commande</p>
                            </div>
                        </div>

                    </div>

                </div>
            </main>
        </div>
    );
}

export default Acceuil