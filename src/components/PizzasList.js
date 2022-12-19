// import logo from './logo.svg';
import '../sass/App.scss' ;
import Pizza from './Pizza';
import pizzas from '../pizzas';
import React, { useState } from 'react';
import OrderedPizzas from './OrderedPizzas';
import { Header } from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { add, addPizza, remove } from '../slices';
import { Button } from 'react';
import { useParams } from 'react-router-dom';




const PizzaList = () => {

  // const [cart, setCart] = useState({
  //   items: [],
  //   total: 0,
  //   numOrder: Date.now(),
  //   quantity: 1
  // })

  const [pizza, setPizza] = useState({});

  const allOrders = useSelector(state => state.data.orders);

  console.log(allOrders);

  const { id } = useParams();

  const selectedOrder = allOrders.find(idToFind => idToFind.id === Number(id));

  console.log(selectedOrder);


  const dispatch = useDispatch();

  // const addOrder = () => {
  //   selectedOrder.dispatch(add())

  //   setPizza({});
  // }
  const addPizzas = () => {
    dispatch(addPizza())

    setPizza({});
  }

  const addToCart = (item) => {
    // Modification afin d'avoir un id unique lorsque l'on clique plusieurs fois sur le même légume
    const copyItem = {...item};

    // if (copyItem.id === item.id) {
    //   cart.items.push([
    //     ...item,
    //     cart.quantity = 1
    //   ])  
    // }
    
    // copyItem.id = `${copyItem.id}-${Date.now()}`;
    
  };

  const renderPizzas = () => {
    const ListPizzas = pizzas.map(item => {
      return (
        <Pizza
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          // action={()=> addToCart(item)}
          action={()=> addPizzas()}
        />
        
      );
    }); 
    

// useParams
// find - allOrders


    return (
      <div className="App">
        <Header/>
        <div className="App-container">
          <div className="pizzas-list">
            {ListPizzas}
          </div >
          <div className="App-cart">
          <h2>Commande n° CMD</h2>
            <OrderedPizzas 
            items={selectedOrder.pizzas}
            // total={selectedOrder.total}
            />
          </div>
        </div>
      </div>
    )
  }
  return (
    renderPizzas()
  )
}

export default PizzaList;

