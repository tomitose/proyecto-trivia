import React from 'react'
import "./Card.css"

const Card = ({ item }) => {
  return (
    <div className='card-container'>
        <img className='img-card' src={item.img} alt="img" />
    </div>
  )
}

export default Card