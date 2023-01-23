import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../sass/OrderList.scss'
import { Header } from './Header';
import { displayPrice } from '../Helpers';
import { useNavigate } from 'react-router-dom';
import { deleteOrder } from '../slices';


const OrderList = () => {

    const orders = useSelector(state => state.data.orders);

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const ordersList = orders.map(order => {
        return (
            <tr className='cmd_item' key={order.id}>
                <td>Commande n°{ order.id }</td>
                <td>{ displayPrice(order.total) }</td>
                {order.paid ? <td className='bg-paid'>Réglé</td> : <td className='bg-unpaid'>En attente de paiement</td>}
                <td>
                    {!order.paid ? 
                    <div className="btn_wrapper">
                        <button 
                            className='btn-modif'
                            onClick={() => {
                                navigate(`/order/${order.id}`)
                            }}
                            >
                                <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button 
                        className='btn-del'
                        onClick={() => {
                            dispatch(deleteOrder(order))
                        }}
                        >
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div> : ""}
                </td>
            </tr>
        )
    });


  return (
    <div className='container marg-bottom'>
        <Header />
        <div className="order-list-wrapper">
            <h3>Liste des commandes</h3>
            <div className="order-list-titles">
                <table>
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>Total Commande</th>
                            <th>Statut Commande</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <div className="lign">
                        <hr />  
                    </div>
                    <tbody>
                        {ordersList}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default OrderList