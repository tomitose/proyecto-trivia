import React from "react";
import "./Card.css";

const Card = ({ item, id, handleClick }) => {
  const itemClass = item.stat ? "active " + item.stat : "";

  return (
    <div className={"card" + itemClass} onClick={() => handleClick(id)}>
      <img className="img-card" src={item.img} alt="img" />
    </div>
  );
};

export default Card;
