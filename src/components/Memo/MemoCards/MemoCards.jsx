import React, { useState } from "react";
import Card from "../Card/Card";
import "./MemoCards.css";

const MemoCards = () => {
  const [items, setItems] = useState(
    [
      { id: 1, img: "/img/memoImagenes/html.png", stat: "" },
      { id: 1, img: "/img/memoImagenes/html.png", stat: "" },
      { id: 2, img: "/img/memoImagenes/css.png", stat: "" },
      { id: 2, img: "/img/memoImagenes/css.png", stat: "" },
      { id: 3, img: "/img/memoImagenes/js.png", stat: "" },
      { id: 3, img: "/img/memoImagenes/js.png", stat: "" },
      { id: 4, img: "/img/memoImagenes/scss.png", stat: "" },
      { id: 4, img: "/img/memoImagenes/scss.png", stat: "" },
      { id: 5, img: "/img/memoImagenes/react.png", stat: "" },
      { id: 5, img: "/img/memoImagenes/react.png", stat: "" },
      { id: 6, img: "/img/memoImagenes/vue.png", stat: "" },
      { id: 6, img: "/img/memoImagenes/vue.png", stat: "" },
      { id: 7, img: "/img/memoImagenes/angular.png", stat: "" },
      { id: 7, img: "/img/memoImagenes/angular.png", stat: "" },
      { id: 8, img: "/img/memoImagenes/nodejs.png", stat: "" },
      { id: 8, img: "/img/memoImagenes/nodejs.png", stat: "" }
    ].sort(() => Math.random() - 0.5)
  );



  function handleClick(id){
 
    setItems([...items]);
    alert(id)
};

  return (
    <div className="container-cards">
      {items.map((item, index) => {
         return(
          <Card key={index} item={item} id={item.id} handleClick={handleClick} />
        );
      })}
    </div>
  );
};

export default MemoCards;
