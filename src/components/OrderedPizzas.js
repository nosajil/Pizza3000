import React from 'react'
import { useSelector } from 'react-redux';
import { displayPrice } from '../Helpers'


const OrderedPizzas = ({items, itemToAdd, total}) => {

    

    const listCartItems = items.map(item => {
        return(
            <li key={item.id}>{item.name} - {displayPrice(item.price)}</li>
        )        
    })



  return (
    <div className="orderedPizza-wrapper">
        <ul>
            {listCartItems}
        </ul>
        <div className="App-cart-total">
            Soit un total de: {displayPrice(total)}
        </div>
    </div>
    // [...items, {...itemToAdd, quantity: 1}]
  )
}

export default OrderedPizzas