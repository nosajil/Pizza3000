// import logo from './logo.svg';
import './sass/App.scss' ;
import Pizza from './components/Pizza';
import pizzas from './pizzas';
import React, { useState } from 'react';
import OrderedPizzas from './components/OrderedPizzas';
import { Header } from './components/Header';
import Acceuil from './components/acceuil';
import Payment from './components/payement';
import logo from './logo.svg';
import './sass/App.scss';


const App = () => {

  // const [pizza, setPizza] = useState("");

  const [cart, setCart] = useState({
    items: [],
    total: 0,
    numOrder: Date.now() 
  })

  const addToCart = (item) => {
    // Modification afin d'avoir un id unique lorsque l'on clique plusieurs fois sur le même légume
    const copyItem = {...item};
    copyItem.id = `${copyItem.id}-${copyItem.numOrder}`;

    setCart({
      items: [...cart.items, copyItem],
      total: Math.round((cart.total + item.price)*100)/100,
      // numOrder: Date.now()
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
    // <Acceuil />
    // <Payment />
  
}

export default App;
