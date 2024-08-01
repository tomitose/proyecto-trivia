import React, { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Card from "../Card/Card";
import VictoryModal from "../VictoryModal/VictoryModal";
import "./MemoCards.css";

const MemoCards = () => {
  const navigate = useNavigate();

  const initialItems = useMemo(() => [
    { id: 1, img: "/img/memoImagenes/amarillo.png", matched: false },
    { id: 1, img: "/img/memoImagenes/amarillo.png", matched: false },
    { id: 2, img: "/img/memoImagenes/rojo.png", matched: false },
    { id: 2, img: "/img/memoImagenes/rojo.png", matched: false },
    { id: 3, img: "/img/memoImagenes/azul.png", matched: false },
    { id: 3, img: "/img/memoImagenes/azul.png", matched: false },
    { id: 4, img: "/img/memoImagenes/marron.png", matched: false },
    { id: 4, img: "/img/memoImagenes/marron.png", matched: false },
    { id: 5, img: "/img/memoImagenes/naranja.png", matched: false },
    { id: 5, img: "/img/memoImagenes/naranja.png", matched: false },
    { id: 6, img: "/img/memoImagenes/verde.png", matched: false },
    { id: 6, img: "/img/memoImagenes/verde.png", matched: false },
    { id: 7, img: "/img/memoImagenes/chico.png", matched: false },
    { id: 7, img: "/img/memoImagenes/chico.png", matched: false },
    { id: 8, img: "/img/memoImagenes/chica.png", matched: false },
    { id: 8, img: "/img/memoImagenes/chica.png", matched: false },
  ], []);

  const [items, setItems] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [showingCards, setShowingCards] = useState(false);
  const [showVictoryModal, setShowVictoryModal] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const shuffleCards = useCallback(() => {
    const shuffledCards = [...initialItems].sort(() => Math.random() - 0.5);
    setItems(shuffledCards);
    setTurns(0);
    setTime(0);
    resetTurn();

    setShowingCards(true);
    setTimeout(() => {
      setShowingCards(false);
      startTimer();
    }, 2000); // Adjusted to 2 seconds
  }, [initialItems]);

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleChoice = (item) => {
    if (!disabled) {
      choiceOne ? setChoiceTwo(item) : setChoiceOne(item);
    }
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
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
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    if (items.length && items.every((item) => item.matched)) {
      stopTimer();
      setShowVictoryModal(true);
    }
  }, [items]);

  useEffect(() => {
    shuffleCards();
    return () => stopTimer();
  }, [shuffleCards]);

  const restartGame = () => {
    setShowVictoryModal(false);
    shuffleCards();
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="container-all">
      <Button className="btn-nuevo" variant="contained" onClick={shuffleCards}>
        Nueva partida
      </Button>
      <div className="info">
        <div>Movimientos: {turns}</div>
        <div>Tiempo: {formatTime(time)}</div>
      </div>
      <div className="container-cards">
        {items.map((item, index) => {
          return (
            <Card
              key={index}
              item={item}
              id={item.id}
              handleChoice={handleChoice}
              flipped={showingCards || item === choiceOne || item === choiceTwo || item.matched}
              disabled={disabled}
            />
          );
        })}
      </div>
      <Button
        className="btn-volver"
        variant="contained"
        onClick={goToHome}
      >
        Volver al inicio
      </Button>
      {showVictoryModal && <VictoryModal onRestart={restartGame} />}
    </div>
  );
};

export default MemoCards;
