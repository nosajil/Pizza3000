import React from 'react'
// import { Link, Button } from 'react'

const Pizza = ({name , price, image, action}) => {
  return (
    <div className="listPizza-wrapper">
        <div onClick={action} className="pizza-wrapper">
                {/* <Link> */}
                <div className="pizza-img">
                  <img src={`${process.env.PUBLIC_URL}/img/pizzas/${image}`} alt="" />
                </div>

                <div className="pizza-infos">
                    <h2>{name}</h2>
                    <p>{price}</p>
                </div>
                {/* </Link> */}
        </div>
    </div>
  )
}

export default Pizza