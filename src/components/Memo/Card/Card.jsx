import React from 'react'
import "../Memo.css"

const Card = ({ item ,id, handleClick}) => {
    const intemClass = item.stat ? "active " + item.stat: ""

  return (
    <div className={"card" + intemClass} onClick={()=> handleClick(id)}>
        <img className='img-card' src={item.img} alt="img" />
    </div>
  )
}

export default Card