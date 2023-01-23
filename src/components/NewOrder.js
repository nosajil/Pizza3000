import '../sass/App.scss' ;
import '../sass/NewOrder.scss'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addOrder } from '../slices';
import { useNavigate } from 'react-router-dom';




const NewOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    const id = `CMD-${Date.now()}`;
    dispatch(addOrder(id))

    navigate(`/order/${id}`, { replace: true })
  })
  
}


export default NewOrder;
