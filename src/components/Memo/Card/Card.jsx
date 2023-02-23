import React from "react";
import "./Card.css";

const Card = ({ item, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled){
      handleChoice(item);
    }
  };

  return (
    <div className="card">
      <div className={ flipped ? "flipped" : ""} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img className="img-front" src={item.img} alt="img" />
        <img
          className="img-back"
          src="/img/memoImagenes/rectangle.png"
          alt="card-back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Card;
