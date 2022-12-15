import { render } from "@testing-library/react"

const Payment = () => {


    return (

        <div className="payments">
            <main>

                <div className="selection">
                    
                </div>


                <div className="detail">
                    <h1 className="commande">Détail de la commande n° CMD-123456789</h1>

                    <div className="btn">

                        <div className="btn-un">
                            <a href="" >Soit un total de 00.0€</a>
                        </div>
                        <div className="btn-deux">
                            <a href="" >Encaisser la commande</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Payment