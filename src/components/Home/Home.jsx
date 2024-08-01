import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'
import "./Home.css"

const Home = () => {

  const navigate = useNavigate()

  return (
    <div className='container-main-home' style={{height:'100%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div style={{height:'50%',width:'50%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly'}}>
        <Button className="btn-home" variant="contained" onClick={() => navigate('/dragdrop')}>Juego de imágenes</Button>
        <Button className="btn-home" variant="contained" onClick={() => navigate('/memo')}>Juego de memoria</Button>
      </div>
    </div>
  )
}

export default Home