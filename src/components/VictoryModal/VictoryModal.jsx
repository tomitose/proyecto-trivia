import React from 'react';
import Confetti from 'react-confetti';
import { Button } from '@mui/material';
import './VictoryModal.css';

const VictoryModal = ({ onRestart }) => {
  return (
    <div className="victory-modal">
      <Confetti />
      <div className="victory-content">
        <h2>¡Enhorabuena!</h2>
        <Button className='btn-jugar' onClick={onRestart}>
          Volver a jugar
        </Button>
      </div>
    </div>
  );
};

export default VictoryModal;
