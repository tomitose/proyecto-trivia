import React from "react";
import "./Card.css";

const Card = ({ item, handleChoice }) => {

  const handleClick = () => {
    handleChoice(item)
  }

  return (
    <div className="card" onClick={handleClick}>
      <img className="img-card" src={item.img} alt="img" />
      {/* <div className="back"></div> */}
    </div>
  );
};

export default Card;
