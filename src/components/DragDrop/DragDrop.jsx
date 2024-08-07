import React, { useState, useEffect, useRef } from 'react';
import VictoryModal from '../VictoryModal/VictoryModal';
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import './DragDrop.css';

// Importar íconos
import { VolumeUp, VolumeOff } from '@mui/icons-material';

// Función para barajar los elementos de un array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Función para seleccionar una muestra aleatoria de elementos
const getRandomSample = (array, sampleSize) => {
  return shuffleArray([...array]).slice(0, sampleSize);
};

// Función para barajar los contenedores
const shuffleContainers = (containers) => {
  return shuffleArray(containers);
};

const DragDrop = () => {
  const navigate = useNavigate();

  const initialItems = [
    { id: 1, src: '/img/dragImagenes/objetos/banana.png', category: 'organico' },
    { id: 2, src: '/img/dragImagenes/objetos/bolsa-plastico.png', category: 'plastico' },
    { id: 3, src: '/img/dragImagenes/objetos/botella-vidrio.png', category: 'vidrio' },
    { id: 4, src: '/img/dragImagenes/objetos/botella.png', category: 'plastico' },
    { id: 5, src: '/img/dragImagenes/objetos/caja.png', category: 'papel' },
    { id: 6, src: '/img/dragImagenes/objetos/cuchara.png', category: 'plastico' },
    { id: 7, src: '/img/dragImagenes/objetos/diario.png', category: 'papel' },
    { id: 8, src: '/img/dragImagenes/objetos/frasco.png', category: 'vidrio' },
    { id: 9, src: '/img/dragImagenes/objetos/lata-coca.png', category: 'aluminio' },
    { id: 10, src: '/img/dragImagenes/objetos/lata.png', category: 'aluminio' },
    { id: 11, src: '/img/dragImagenes/objetos/leche.png', category: 'papel' },
    { id: 12, src: '/img/dragImagenes/objetos/pescado.png', category: 'organico' },
    { id: 13, src: '/img/dragImagenes/objetos/pollo.png', category: 'organico' },
    { id: 14, src: '/img/dragImagenes/objetos/rociador.png', category: 'aluminio' },
    { id: 15, src: '/img/dragImagenes/objetos/vidrio2.png', category: 'vidrio' },
    { id: 16, src: '/img/dragImagenes/objetos/vidrio3.png', category: 'vidrio' },
    { id: 17, src: '/img/dragImagenes/objetos/tijera.png', category: 'aluminio' },
    { id: 18, src: '/img/dragImagenes/objetos/sandia.png', category: 'organico' },
    { id: 19, src: '/img/dragImagenes/objetos/lata-sola.png', category: 'aluminio' },
    { id: 20, src: '/img/dragImagenes/objetos/botella3.png', category: 'plastico' },
    { id: 21, src: '/img/dragImagenes/objetos/papel2.png', category: 'papel' },
    { id: 22, src: '/img/dragImagenes/objetos/botella2.png', category: 'plastico' },
    { id: 23, src: '/img/dragImagenes/objetos/bateria-2.png', category: 'raee' },
    { id: 24, src: '/img/dragImagenes/objetos/celular.png', category: 'raee' },
    { id: 25, src: '/img/dragImagenes/objetos/pc.png', category: 'raee' },
    { id: 26, src: '/img/dragImagenes/objetos/foco.png', category: 'raee' }
  ];

  const initialContainers = [
    { id: 1, className: 'contenedor-amarillo', category: 'aluminio', imageSrc: '/img/dragImagenes/container-aluminio.png' },
    { id: 2, className: 'contenedor-gris', category: 'organico', imageSrc: '/img/dragImagenes/container-organico.png' },
    { id: 3, className: 'contenedor-azul', category: 'papel', imageSrc: '/img/dragImagenes/container-papel.png' },
    { id: 4, className: 'contenedor-verde', category: 'vidrio', imageSrc: '/img/dragImagenes/container-vidrio.png' },
    { id: 5, className: 'contenedor-naranja', category: 'plastico', imageSrc: '/img/dragImagenes/container-plastico.png' },
    { id: 6, className: 'contenedor-rojo', category: 'raee', imageSrc: '/img/dragImagenes/container-raee.png' }
  ];

  const [items, setItems] = useState(getRandomSample(initialItems, 12));
  const [containers, setContainers] = useState(shuffleContainers([...initialContainers]));
  const [showVictoryModal, setShowVictoryModal] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(true);
  const audioRef = useRef(null);
  const cheeringAudioRef = useRef(null);

  useEffect(() => {
    if (items.length === 0) {
      setShowVictoryModal(true);
      setAudioPlaying(false); // Detener el audio al finalizar
      if (cheeringAudioRef.current) {
        cheeringAudioRef.current.play().catch(err => console.log('Error al reproducir el audio de celebración:', err));
      }
    }
  }, [items]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      if (audioPlaying) {
        audioRef.current.play().catch(err => console.log('Error al reproducir el audio:', err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMuted, audioPlaying]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('id', id);
  };

  const handleTouchStart = (e, id) => {
    e.target.dataset.id = id;
    e.target.setPointerCapture(e.pointerId);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const touchLocation = e.touches[0];
    const draggableItem = document.querySelector(`[data-id="${e.target.dataset.id}"]`);
    if (draggableItem) {
      draggableItem.style.position = 'absolute';
      draggableItem.style.left = `${touchLocation.pageX - draggableItem.width / 2}px`;
      draggableItem.style.top = `${touchLocation.pageY - draggableItem.height / 2}px`;
    }
  };

  const handleTouchEnd = (e) => { 
    const id = e.target.dataset.id; 
    const touchItem = items.find(item => item.id === parseInt(id)); 
    const dropTargets = document.querySelectorAll('.droppable-elements > div'); 
    let placedInCorrectContainer = false; 

    dropTargets.forEach(target => { 
      const rect = target.getBoundingClientRect(); 
      const touchX = e.changedTouches[0].clientX; 
      const touchY = e.changedTouches[0].clientY; 
      if ( 
        touchX >= rect.left && 
        touchX <= rect.right && 
        touchY >= rect.top && 
        touchY <= rect.bottom 
      ) { 
        const dropCategory = target.dataset.category; 
        if (touchItem && touchItem.category === dropCategory) { 
          setItems(prevItems => prevItems.filter(item => item.id !== parseInt(id))); 
          placedInCorrectContainer = true; 
        } else { 
          // Añadir la clase shake 
          target.classList.add('shake'); 
          setTimeout(() => { 
            target.classList.remove('shake'); 
          }, 500); // Duración de la animación
        } 
      } 
    }); 

    if (!placedInCorrectContainer) { 
      const draggableItem = document.querySelector(`[data-id="${id}"]`); 
      if (draggableItem) { 
        draggableItem.style.position = 'static'; 
      } 
    } 
  }; 

  const handleDrop = (e, dropCategory) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('id');
    const dropItem = items.find(item => item.id === parseInt(id));
    const target = e.target.closest('[data-category]'); // Obtener el contenedor objetivo
  
    if (dropItem.category === dropCategory) {
      setItems(prevItems => prevItems.filter(item => item.id !== parseInt(id)));
    } else {
      // Añadir la clase shake
      if (target) {
        target.classList.add('shake');
        setTimeout(() => {
          target.classList.remove('shake');
        }, 500); // Duración de la animación
      }
    }
  };
  

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const goToHome = () => {
    navigate('/');
  };

  const handleRestart = () => {
    setItems(getRandomSample(initialItems, 12));
    setContainers(shuffleContainers([...initialContainers]));
    setShowVictoryModal(false);
    setAudioPlaying(true); // Reanudar el audio al reiniciar
  };

  const stopCheeringAudio = () => {
    if (cheeringAudioRef.current) {
      cheeringAudioRef.current.pause(); // Detener el audio
      cheeringAudioRef.current.currentTime = 0; // Reiniciar la posición del audio
    }
  };

  return (
    <div className='container-dragdrop'>
      {showVictoryModal && <VictoryModal onRestart={() => { stopCheeringAudio(); handleRestart(); }} />}
      <div className='volume-control' onClick={toggleMute}>
        {isMuted ? <VolumeOff /> : <VolumeUp />}
      </div>
      <audio ref={audioRef} src="/jingle.mpeg" loop></audio>
      <audio ref={cheeringAudioRef} src="/cheering.wav" loop></audio>
      <div className='container-drag'>
        <div className='draggable-elements'>
          {items.map(item => (
            <div key={item.id}>
              <img
                className='objeto'
                src={item.src}
                alt=''
                draggable
                onDragStart={(e) => handleDragStart(e, item.id)}
                onTouchStart={(e) => handleTouchStart(e, item.id)}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                data-id={item.id}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='container-drop'>
        <h1 className='title-contenedores'>Arrastra la basura y colócala en su contenedor</h1>
        <div className='droppable-elements'>
          {containers.map(container => (
            <div
              key={container.id}
              className={`droppable ${container.className}`}
              data-category={container.category}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, container.category)}
            >
              <img className={container.className} src={container.imageSrc} alt="" />
            </div>
          ))}
        </div>
        <Button
          className="btn-volver-drop"
          variant="contained"
          onClick={goToHome}
        >
          Volver al inicio
        </Button>
      </div>
    </div>
  );
};

export default DragDrop;