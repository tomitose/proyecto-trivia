import React, { useState } from 'react';
import './DragDrop.css';

const DragDrop = () => {
  const [items, setItems] = useState([
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
    { id: 22, src: '/img/dragImagenes/objetos/botella2.png', category: 'plastico' }
  ]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('id', id);
  };

  const handleTouchStart = (e, id) => {
    const touchItem = items.find(item => item.id === id);
    e.target.dataset.id = touchItem.id;
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
    const touchItem = items.find(item => item.id === parseInt(e.target.dataset.id));
    const dropTargets = document.querySelectorAll('.droppable-elements > div');
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
        handleDrop(e, touchItem.category);
      }
    });
  };

  const handleDrop = (e, dropCategory) => {
    const id = e.dataTransfer ? e.dataTransfer.getData('id') : e.target.dataset.id;
    const newItems = items.filter(item => {
      if (item.id === parseInt(id) && item.category === dropCategory) {
        return false;
      }
      return true;
    });
    setItems(newItems);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className='container-dragdrop'>
      <div className='container-drag'>
        <h1> Contenedor </h1>
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
        <h1> Arrastra y suelta en su contenedor</h1>
        <div className='droppable-elements'>
          <div
            className='contenedor-amarillo'
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'aluminio')}
          >
            <img className='contenedor-amarillo' src="/img/dragImagenes/container-aluminio.png" alt="" />
          </div>
          <div
            className='contenedor-gris'
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'organico')}
          >
            <img className='contenedor-gris' src="/img/dragImagenes/container-organico.png" alt="" />
          </div>
          <div
            className='contenedor-azul'
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'papel')}
          >
            <img className='contenedor-azul' src="/img/dragImagenes/container-papel.png" alt="" />
          </div>
          <div
            className='contenedor-naranja'
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'plastico')}
          >
            <img className='contenedor-naranja' src="/img/dragImagenes/container-plastico.png" alt="" />
          </div>
          <div
            className='contenedor-verde'
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'vidrio')}
          >
            <img className='contenedor-verde' src="/img/dragImagenes/container-vidrio.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DragDrop;
