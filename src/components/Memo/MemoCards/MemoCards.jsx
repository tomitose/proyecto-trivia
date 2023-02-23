import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Card from "../Card/Card";
import "./MemoCards.css";

const MemoCards = () => {
  const [items, setItems] = useState(
    [
      { id: 1, img: "/img/memoImagenes/html.png", matched: false },
      { id: 1, img: "/img/memoImagenes/html.png", matched: false },
      { id: 2, img: "/img/memoImagenes/css.png", matched: false },
      { id: 2, img: "/img/memoImagenes/css.png", matched: false },
      { id: 3, img: "/img/memoImagenes/js.png", matched: false },
      { id: 3, img: "/img/memoImagenes/js.png", matched: false },
      { id: 4, img: "/img/memoImagenes/scss.png", matched: false },
      { id: 4, img: "/img/memoImagenes/scss.png", matched: false },
      { id: 5, img: "/img/memoImagenes/react.png", matched: false },
      { id: 5, img: "/img/memoImagenes/react.png", matched: false },
      { id: 6, img: "/img/memoImagenes/vue.png", matched: false },
      { id: 6, img: "/img/memoImagenes/vue.png", matched: false },
      { id: 7, img: "/img/memoImagenes/angular.png", matched: false },
      { id: 7, img: "/img/memoImagenes/angular.png", matched: false },
      { id: 8, img: "/img/memoImagenes/nodejs.png", matched: false },
      { id: 8, img: "/img/memoImagenes/nodejs.png", matched: false },
    ].sort(() => Math.random() - 0.5)
  );

  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] =useState(false)

  const shuffleCards = () => {
    const suffledCards = [...items].sort(() => Math.random() - 0.5);
    setItems(suffledCards);
    setTurns(0);
    resetTurn();
  };

  // handle choice
  const handleChoice = (item) => {
    choiceOne ? setChoiceTwo(item) : setChoiceOne(item);
  };

  // compare two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.id === choiceTwo.id) {
        setItems((prevCards) => {
          return prevCards.map((item) => {
            if (item.id === choiceOne.id) {
              return { ...item, matched: true };
            } else {
              return item;
            }
          });
        });
        resetTurn();
      } else {
        console.log("No son iguales");
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // reset turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false)
  };

  // console.log(cards, turns);

  return (
    <div className="container-all">
      <Button className="btn-nuevo" variant="contained" onClick={shuffleCards}>
        Nueva partida
      </Button>
      <div className="container-cards">
        {items.map((item, index) => {
          return (
            <Card
              key={index}
              item={item}
              id={item.id}
              handleChoice={handleChoice}
              flipped={item === choiceOne || item === choiceTwo || item.matched}
              disabled={disabled}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MemoCards;
