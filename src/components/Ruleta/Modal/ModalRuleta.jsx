import React, { useState} from 'react'
import { Modal, Box, Button, Container, Dialog} from "@mui/material"
import { createTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

const ModalRuleta = ({ open, data, close }) => {

  const [openChildModal, setOpenChildModal] = useState(false)

  const [estadoRespuesta, setEstadoRespuesta] = useState(false)

  //max 280px BoxModal:width: width:90% height:75%,Container:flex,align center

  const ChildModal = () => {
    return (
      <Dialog
        open={openChildModal}
        onClose={close}
        PaperProps={{ className:"dialog-two"}}
      >
        <Box style={styleTwo}>
          {estadoRespuesta === true &&
            <div style={{ height: '30%' }}>
              <p style={{ textAlign: "center", color: "white", fontSize: "larger", margin: 0 }}>Correcto</p>
              <p style={{ textAlign: "center", margin: 0 }}>La imagen hace referencia a {data?.tematica}</p>
            </div>}
          {estadoRespuesta === false &&
            <div>
              <p style={{ textAlign: "center", color: "white", fontSize: "larger", margin: 0 }}>Incorrecto</p>
              <p style={{ textAlign: "center", margin: 0 }}>La imagen hace referencia a {data?.tematica}</p>
            </div>}
          <div style={{ height: '70%' }}>
            <p>
              Descripcion breve de manera educativa sobre el acontecimiento
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo deserunt, fuga minus quidem, animi cupiditate hic dolor, sint eum atque impedit blanditiis sed exercitationem eaque rerum nostrum. Non, suscipit inventore.
            </p>
          </div>
        </Box>
      </Dialog>
    )
  }

  let style = { //Adaptar a responsive luego de finalizar todo el mecanismo//Crear un mecanismo para que cada boton salga en distinto orden segun el click del spin, ej: primer intento:btn1,btn,3,btn2 seg intento: btn3,btn1,btn2 etc
    background: "white",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height:'50%',
    width:'50%'
  };

  const styleTwo = { //Adaptar a responsive luego de finalizar todo el mecanismo//Crear un mecanismo para que cada boton salga en distinto orden segun el click del spin, ej: primer intento:btn1,btn,3,btn2 seg intento: btn3,btn1,btn2 etc
    backgroundColor: estadoRespuesta === true ? 'rgb(138 221 138)' : '#ed6868',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "100%",
    height: "100%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'auto'
  };

  const checkAnswer = (opcion, e) => {
    if (opcion === data.tematica) {
      document.getElementById(e.target.id).setAttribute("style", "background-color:green")
      setOpenChildModal(true)
      setEstadoRespuesta(true)
    } else {
      document.getElementById(e.target.id).setAttribute("style", "background-color:red")
      setOpenChildModal(true)
      setEstadoRespuesta(false)
    }
  }

  return (

    
    <Dialog
    open={open}
    onClose={close}
    PaperProps={{ className:"dialog-one"}}
    >
      <Box sx={{height:'100%',width:'100%'}}>
        <Box sx={{ height: "40%",padding:'25px' }}>
          <Container sx={{ height: "90%", display: "flex", justifyContent: "center" ,padding:"0 !important"}}>
            <img src={data?.image} alt="" style={{height:'100%',width:'100%'}} />
          </Container>
        </Box>
        <Box sx={{ height: "60%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
          <Button id='btn-1' sx={{ width: "70%" }} variant="contained" onClick={(e) => checkAnswer(data?.opt1, e)}>{data?.opt1}</Button>
          <Button id='btn-2' sx={{ width: "70%" }} variant="contained" onClick={(e) => checkAnswer(data?.opt2, e)}>{data?.opt2}</Button>
          <Button id='btn-3' sx={{ width: "70%" }} variant="contained" onClick={(e) => checkAnswer(data?.opt3, e)}>{data?.opt3}</Button>
        </Box>
        <ChildModal></ChildModal>
      </Box>
    </Dialog>
  )
}

export default ModalRuleta