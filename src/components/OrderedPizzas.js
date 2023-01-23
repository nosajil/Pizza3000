import React from 'react'
import { displayPrice } from '../Helpers'
import '../sass/Orderedpizzas.scss'


const OrderedPizzas = ({pizzas, orderedPizzas, total, paid = false, setPaid = false}) => {
    
        const listCartItems = Object.keys(orderedPizzas).map(key => {
            const totalPizzaPrice = Math.round((pizzas[key].price * orderedPizzas[key]) * 10) / 10;
        return (
            <div className="item_wrapper">
                <li className='pizza_item' key={key}>
                    <span className='pizza_item_name'>{pizzas[key].name}</span>
                    <span>{displayPrice(totalPizzaPrice)}</span>
                </li>
                <p>( {orderedPizzas[key]} x {displayPrice(pizzas[key].price)} )</p>
            </div>
        )        
    })
    

  return (
    <div className="ordered_pizza_wrapper">
        <ul>
            {listCartItems}
        </ul>
        <div className="App-cart-total">
            Soit un total de: {displayPrice(total)}
        </div>
        {paid ? <button className='order-paid-button' onClick={setPaid}>Encaisser la commande</button> : ""}
    </div>
  )
}

export default OrderedPizzas