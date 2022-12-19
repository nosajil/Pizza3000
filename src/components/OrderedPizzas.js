import React from 'react'
import { displayPrice } from '../Helpers'


const OrderedPizzas = ({items, itemToAdd, total}) => {

    // const existingCartItem = items.find(item => item.id === itemToAdd.id);

    // if (existingCartItem) {
    //     return items.map(item => item.id === itemToAdd.id ? {...itemToAdd, quantity: item.quantity + 1}: item
    //     );
    // }




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