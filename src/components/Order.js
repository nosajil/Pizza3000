import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Header } from './Header';
import Pizza from './Pizza';
import { addPizzaOrder } from '../slices';
import OrderedPizzas from './OrderedPizzas';

const Order = () => {
    const dispatch = useDispatch();
    const pizzas = useSelector(state => state.data.pizzas);
    const orders = useSelector(state => state.data.orders);

    const { oid } = useParams();

    const handleClick = (oid, id) => {
        dispatch(addPizzaOrder({oid, pid: id}));
    }

    const index = orders.findIndex(order => {
        return order.id === oid;
    });

    const listPizzas = Object.keys(pizzas).map(key => {
        return (
            <Pizza 
                key={key}
                name={pizzas[key].name}
                price={pizzas[key].price}
                image={pizzas[key].image}
                addToOrder={() => handleClick(oid, key)}
            />
        )
    })

    return (
        <div className="container">
          <Header/>
          <div className="pizzalist_container">
            <div className="pizzas-list">
                {listPizzas}
            </div >
            
            <div className="orders_list">
                <h2>Commande n° {oid}</h2>
                <OrderedPizzas 
                pizzas={pizzas}
                total={orders[index].total}
                orderedPizzas={orders[index].pizzas}
                />
            </div>
          </div>
        </div>
        
      )
}

export default Order