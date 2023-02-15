import React from 'react'
import { Modal, Box, Button, Container, Typography } from "@mui/material"
const ModalRuleta = ({ open, data, close }) => {

  const style = { //Adaptar a responsive luego de finalizar todo el mecanismo//Crear un mecanismo para que cada boton salga en distinto orden segun el click del spin, ej: primer intento:btn1,btn,3,btn2 seg intento: btn3,btn1,btn2 etc
    background: "white",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    height: "50%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const checkAnswer = (opcion,e) => {
    if(opcion == data.tematica) {
      document.getElementById(e.target.id).setAttribute("style","background-color:green")
      
    }else{
      document.getElementById(e.target.id).setAttribute("style","background-color:red")
    }
  }

  return (
    <Modal
      open={open}
      onClose={close}
    >
      <Box style={style}>
        <Box sx={{height:"50%"}}>
          <Container sx={{height:"100%",display:"flex",justifyContent:"center"}}>
            <img src={data?.image} alt="" style={{height:"100%",width:"70%"}}/>
          </Container>
        </Box>
        <Box sx={{height:"50%",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"}}>
          <Button id='btn-1' sx={{width:"70%"}} variant="contained" onClick={(e) => checkAnswer(data?.opt1,e)}>{data?.opt1}</Button> 
          <Button id='btn-2' sx={{width:"70%"}} variant="contained" onClick={(e) => checkAnswer(data?.opt2,e)}>{data?.opt2}</Button>
          <Button id='btn-3' sx={{width:"70%"}} variant="contained" onClick={(e) => checkAnswer(data?.opt3,e)}>{data?.opt3}</Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default ModalRuleta