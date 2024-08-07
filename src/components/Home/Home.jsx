import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'
import "./Home.css"

const Home = () => {

  const navigate = useNavigate()

  return (
    <div className='container-main-home' style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div className='container-main-juegos'>
          <img className='imagen-parque' src="/logo-cormecoritos.png" alt="" />
          <div className='btns-juegos'>
            <Button className="btn-drag" variant="contained" onClick={() => navigate('/dragdrop')}>Juego de Imágenes <img style={{paddingLeft:'20px'}} src="/imagen-logo.svg" alt="" /></Button>
            <Button className="btn-memory" variant="contained" onClick={() => navigate('/memo')}>Juego de Memoria <img style={{paddingLeft:'20px'}} src="/memory-logo.svg" alt="" /></Button>
          </div>
      </div>
    </div>
  )
}

export default Home