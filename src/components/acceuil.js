// import { render } from "@testing-library/react";
import { useNavigate } from 'react-router-dom'



const Acceuil = () => {

const navigate = useNavigate()

    return (
        <div className="acceuils">

            <main>
                <div className="acceuil">

                    <div className="title">
                    <img src={""} alt="" />
                        <h1>Bienvenue chez Fred-dy's</h1>
                    
                        
                    </div>

                    <div className="btn">

                        <div className="new_commande">
                            {/* <Link to="/pizzas"> */}
                                <div onClick={() => navigate("/pizzas")} className="new_commade-lien">
                                    <h1><i class="fa-solid fa-truck-fast"></i>Nouvelle Commande</h1>
                                    <hr />
                                    <p>Créer et enregistrer une nouvelle commande</p>
                                </div>
                            {/* </Link> */}
                        </div>

                        <div className="processing_commande">
                            <a href="" onClick="" className="processing_commande-lien">

                                <h1><i class="fa-solid fa-fire-flame-curved"></i>Commande en Cours</h1>
                                <hr />
                                <p>Voir le détaildes commandes en cours</p>
                            </a>
                        </div>

                        <div className="payment_commande">
                            <a href="" onClick="" className="payment_commande-lien">

                                <h1><i class="fa-solid fa-euro-sign"></i>Paiement de commande</h1>
                                <hr />
                                <p>Encaisser une commande</p>
                            </a>
                        </div>

                    </div>

                </div>
            </main>
        </div>
    );
}

export default Acceuil