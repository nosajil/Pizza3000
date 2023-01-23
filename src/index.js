import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewOrder from './components/NewOrder';
import NotFound from './components/NotFound';
import { configureStore } from '@reduxjs/toolkit';
import Order from './components/Order';
import dataReducer from './slices'
import OrderList from './components/OrderList';

const store = configureStore({
  reducer: {
    data: dataReducer
  }
})

const Root = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App/>} />
            {/* :id est la synthaxe pour avoir des valeurs variables dans l'url. ces valeurs seront stockées dans un paramètre portant le même nom */}
            <Route path="/pizzas" element={<NewOrder/>} />

            <Route path="/order/:oid" element={<Order/>} />

            <Route path="/orderlist" element={<OrderList/>} />
            {/* Si aucune route ne correspond à ce qui est spécifié dans l'url on utilise une route "par défaut" */}
            <Route element={<NotFound/>} />

        </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root')); root.render (
  <Provider store={store}>
      <Root />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
