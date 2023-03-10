import React from 'react'
import '../sass/Pizza.scss'
import { displayPrice } from '../Helpers'

const Pizza = ({name , price, image, addToOrder}) => {
  return (
    <div className="pizza_card">
        <div onClick={addToOrder}>
                <div className="pizza-img">
                  <img src={`${process.env.PUBLIC_URL}/img/pizzas/${image}`} alt="" />
                </div>

                <div className="pizza-infos">
                    <h2>{name}</h2>
                    <p>{displayPrice(price)}</p>
                </div>
        </div>
    </div>
  )
}

export default Pizza