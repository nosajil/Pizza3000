import React from 'react'
// import { Link, Button } from 'react'

const Pizza = ({name , price, image, action}) => {
  return (
    <div className="listPizza-wrapper">
        <div onClick={action} className="pizza-wrapper">
                <div className="pizza-img">
                    <img src={image} alt="" />
                </div>

                <div className="pizza-infos">
                    <h2>{name}</h2>
                    <p>{price}</p>
                </div>
        </div>
    </div>
  )
}

export default Pizza