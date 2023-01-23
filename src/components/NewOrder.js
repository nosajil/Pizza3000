// import logo from './logo.svg';
import '../sass/App.scss' ;
import Pizza from './Pizza';
import pizzas from '../pizzas';
import '../sass/NewOrder.scss'
import React, { useEffect, useState } from 'react';
import OrderedPizzas from './OrderedPizzas';
import { Header } from './Header';
import { useDispatch } from 'react-redux';
import { add, addOrder, complete, remove } from '../slices';
import { useNavigate } from 'react-router-dom';




const NewOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const id = `CMD-${Date.now()}`;
    dispatch(addOrder(id))

    navigate(`/order/${id}`, { replace: true })
  }, [])
  
}


export default NewOrder;
