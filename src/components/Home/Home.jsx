import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='container-main-home' style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className='container-main-juegos'>
        {/* Usamos process.env.PUBLIC_URL para apuntar a la ubicación correcta de las imágenes */}
        <img className='imagen-cormecoritos' src={`${process.env.PUBLIC_URL}/logo-cormecoritos.png`} alt="Logo Cormecoritos" />
        <div className='btns-juegos'>
          <Button className="btn-drag" variant="contained" onClick={() => navigate('/dragdrop')}>
            Juego de Imágenes 
            <img style={{ paddingLeft: '20px' }} src={`${process.env.PUBLIC_URL}/imagen-logo.svg`} alt="Imagen Logo" />
          </Button>
          <Button className="btn-memory" variant="contained" onClick={() => navigate('/memo')}>
            Juego de Memoria 
            <img style={{ paddingLeft: '20px' }} src={`${process.env.PUBLIC_URL}/memory-logo.svg`} alt="Memory Logo" />
          </Button>
          <Button className="btn-cormecor" variant="contained" onClick={() => window.location.href = 'https://cormecor.com.ar/'}>
            Volver a Cormecor
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
