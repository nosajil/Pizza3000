import React from 'react'
import { displayPrice } from '../Helpers'


const OrderedPizzas = ({items, total}) => {

    const listCartItems = items.map(item => {
        return(
            <li key={item.id}>{item.name} - {displayPrice(item.price)}</li>
        )
    })

  return (
    <div className="orderedPizza-wrapper">
        <h2>Commande n° CMD</h2>
        <ul>
            {listCartItems}
        </ul>
        <div className="App-cart-total">
            Soit un total de: {displayPrice(total)}
        </div>
    </div>
  )
}

export default OrderedPizzas