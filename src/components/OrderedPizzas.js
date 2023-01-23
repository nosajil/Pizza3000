import React from 'react'
import { useSelector } from 'react-redux';
import { displayPrice } from '../Helpers'
import '../sass/Orderedpizzas.scss'


<<<<<<< HEAD
const OrderedPizzas = ({pizzas, orderedPizzas, total, paid = false, setPaid = false}) => {
    
        const listCartItems = Object.keys(orderedPizzas).map(key => {
            const totalPizzaPrice = Math.round((pizzas[key].price * orderedPizzas[key]) * 10) / 10;
        return (
            <div className="item_wrapper">
                <li className='pizza_item' key={key}>
                    <span>{pizzas[key].name}</span>
                    <span>{displayPrice(totalPizzaPrice)}</span>
                </li>
                <p>( {orderedPizzas[key]} x {displayPrice(pizzas[key].price)} )</p>
            </div>
=======
const OrderedPizzas = ({items, itemToAdd, total}) => {

    

    const listCartItems = items.map(item => {
        return(
            <li key={item.id}>{item.name} - {displayPrice(item.price)}</li>
>>>>>>> c8c75b3d761a9bf008d4e2f34de840e71f14a777
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