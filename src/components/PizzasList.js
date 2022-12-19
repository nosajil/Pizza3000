// import logo from './logo.svg';
import '../sass/App.scss' ;
import Pizza from './Pizza';
import pizzas from '../pizzas';
import React, { useState } from 'react';
import OrderedPizzas from './OrderedPizzas';
import { Header } from './Header';
import { useDispatch } from 'react-redux';
import { add, complete, remove } from '../slices';




const PizzaList = () => {

  // const [pizza, setPizza] = useState("");

  const [cart, setCart] = useState({
    items: [],
    total: 0,
    numOrder: Date.now(),
    quantity: 1
  })

  // const [pizza, setPizza] = useState({});

  // const dispatch = useDispatch;

  // const addOrder = () => {
  //   dispatch(add(pizza))

  //   setPizza({});
  // }

  const addToCart = (item) => {
    // Modification afin d'avoir un id unique lorsque l'on clique plusieurs fois sur le même légume
    const copyItem = {...item};

    // if (copyItem.id === copyItem.id) {
    //   cart.items.push([
    //     ...item,
    //     cart.quantity = 1
    //   ])
      
    // }
    copyItem.id = `${copyItem.id}-${Date.now()}`;
    

    setCart({
      items: [...cart.items, copyItem],
      total: Math.round((cart.total + item.price)*100)/100,
      numOrder: cart.numOrder,
    });
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
          action={()=> addToCart(item)}
        />
      );
    });



    return (
      <div className="App">
        <Header/>
        <div className="App-container">
          <div className="pizzas-list">
            {ListPizzas}
          </div >
          <div className="App-cart">
          <h2>Commande n° CMD {cart.numOrder}</h2>
            <OrderedPizzas 
            items={cart.items}
            total={cart.total}
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
