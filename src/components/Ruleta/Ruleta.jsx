import { duration, outlinedInputClasses } from '@mui/material';
import React, { useState } from 'react'
import ModalRuleta from './Modal/ModalRuleta';
import "./Ruleta.css"


//Dejar parcheado 

const Ruleta = () => {

    const [frase, setFrase] = useState({ name: "circle" }); //Buscar reset despues de cada blick en boton
    const [dataForModal, setDataForModal] = useState({ id: 0, tematica: "", image: "" });
    const [openModalState, setOpenModalState] = useState(false);
    const [disabledButton, setDisabledButton] = useState(true);


    const closeModal = () => {
        setOpenModalState(false)
        setFrase({
            name: "circle"
        })
    }

    const data = [
        { id: "d-1", tematica: "Juicio Juntas", image: "/img/ruletaImagenes/tematica1.jpg", opt1: "Juicio Juntas", opt2: "Diputados de la Nacion recibiendo distinción", opt3: "Juicio por las Malvinas" },
        { id: "d-2", tematica: "Leyes Obedencia debida y punto", image: "/img/ruletaImagenes/tematica2.jpg", opt1: "Leyes Obedencia debida y punto", opt2: "Menem asume la presidencia", opt3: "Oficiales Armadas presentandose ante la nación" },
        { id: "d-3", tematica: "Vuelta a la democracia", image: "/img/ruletaImagenes/tematica3.jpg", opt1: "Vuelta a la democracia", opt2: "Creacion de la nueva bandera Argentina", opt3: "Presidente de Estados Unidos visita la casa Rosada" },
        { id: "d-4", tematica: "Nestor Kirchner baja los cuadros de la dictadura", image: "/img/ruletaImagenes/tematica4.jpg", opt1: "Nestor Kirchner baja los cuadros de la dictadura", opt2: "Nestor Kirchner cuelga cuadros de los presidentes Argentinos faltantes", opt3: "Nestor Kirchner baja los cuadros para reenmarcarlos" },
        { id: "d-5", tematica: "Abuela recuperando un nieto desaparecido en la dictadura", image: "/img/ruletaImagenes/tematica5.jpg", opt1: "Abuela recuperando un nieto desaparecido en la dictadura", opt2: "Dos personas festejando la vuelta a la democracia", opt3: "Madre y hijo con una foto por el dia de la madre" },
        { id: "d-6", tematica: "Reclamo diplomatico y pacifico por las islas Malvinas", image: "/img/ruletaImagenes/tematica6.jpg", opt1: "Reclamo diplomatico y pacifico por las islas Malvinas", opt2: "Foto de las Islas Malvinas sacadas por un turista", opt3: "Foto del pacifico Argentino" },
        { id: "d-7", tematica: "Primera marcha de las madres de plaza de mayo", image: "/img/ruletaImagenes/tematica7.jpg", opt1: "Primera marcha de las madres de plaza de mayo", opt2: "Madres cortando la calle por falta de luz", opt3: "Madres festejando la vuelta a la democracia" },
        { id: "d-8", tematica: "Remodelacion de centros de detencion de la dictadura", image: "/img/ruletaImagenes/tematica8.jpg", opt1: "Remodelacion de centros de detencion de la dictadura", opt2: "Museo de arte de Buenos Aires", opt3: "Muestra de fotos en Berlin" },
    ]

    const assignTimeById = (id) => {
        let result;

        switch (id) {
            case 1:
                result = 3580;
                break;
            case 2:
                result = 4000;
                break;
            case 3:
                result = 4440;
                break;
            case 4:
                result = 3500;
                break;
            case 5:
                result = 2850;
                break;
            case 6:
                result = 3790;
                break;
            case 7:
                result = 3220;
                break;
            case 8:
                result = 3640;
                break;
            default:
                return console.log("error assignTimeById");
        }
        return result;
    }


    //arrow x(left) : 370, arrow y(top) : 186.5  
    const startRotation = () => {
        setDisabledButton(false)

        setFrase({
            name: "circle start-rotate"
        })

        const durationSetTimeOut1 = Math.floor(Math.random() * 10000) + 1

        setTimeout(() => {
            setFrase({
                name: "circle start-rotate stop-rotate"
            })

            const innerWidth = window.innerWidth;
            const innerHeight = window.innerHeight;

            const spinButton = document.getElementById('middle-button')

            spinButton.classList.add("hide")

            const location = document.elementFromPoint(512, 324) //coordenadas basadas en un size de window width 1010x853 de height            


            data.forEach((e, index) => {
                if (e.id == location.id) {
                    console.log(e.id)
                    if (location.attributes.class.nodeValue == "text") {
                        const elementLiId = location.parentNode.className

                        var obj, matrix;
                        obj = document.getElementById('circulo');
                        matrix = getComputedStyle(obj).getPropertyValue('transform');
                        console.log(qrDecompone(matrix))
                    }
                    setDataForModal(data[index])
                }
            })

            // left: calc(50% - 0px);
            // top: calc(50% - 200px);

        }, durationSetTimeOut1)

        // setTimeout(() => {
        //     setOpenModalState(true)
        //     const spinButton = document.getElementById('middle-button')
        //     spinButton.classList.remove('hide')
        // }, durationSetTimeOut1 + 1000)

    };

    return (
        <div className="main-container">
            <div className="container">
                <div id="flecha" className="arrow"></div>
                <div id="testPoint" style={{ width: 3, height: 3, backgroundColor: 'red', position: "absolute", zIndex: 1 }}></div>
                <button className='spin-button' id="middle-button" onClick={() => startRotation()}></button>
                <ul className={frase.name} id="circulo">
                    <li id="li-1" className='list-1'>
                        <div className="text"
                            spellCheck="false"
                            id="d-1"
                        >
                            <div className="img-container" id="d-1">
                                <img src={data[0].image} alt="" style={{ height: "100%", width: "100%", borderRadius: "5px" }} id="d-1" />
                            </div>
                        </div>
                    </li>
                    <li id="li-2" className='list-2'>
                        <div className="text"
                            spellCheck="false"
                            id="d-2"
                        >
                            <div className="img-container" id="d-2">
                                <img src={data[1].image} alt="" style={{ height: "100%", width: "100%", borderRadius: "5px" }} id="d-2" />
                            </div>
                        </div>
                    </li>
                    <li id="li-3" className='list-3'>
                        <div className="text"
                            spellCheck="false"
                            id="d-3"
                        >
                            <div className="img-container" id="d-3">
                                <img src={data[2].image} alt="" style={{ height: "100%", width: "100%", borderRadius: "5px" }} id="d-3" />
                            </div>
                        </div>
                    </li>
                    <li id="li-4" className='list-4'>
                        <div className="text"
                            spellCheck="false"
                            id="d-4"
                        >
                            <div className="img-container" id="d-4">
                                <img src={data[3].image} alt="" style={{ height: "100%", width: "100%", borderRadius: "5px" }} id="d-4" />
                            </div>
                        </div>
                    </li>
                    <li id="li-5" className='list-5'>
                        <div className="text"
                            spellCheck="false"
                            id="d-5"
                        >
                            <div className="img-container" id="d-5">
                                <img src={data[4].image} alt="" style={{ height: "100%", width: "100%", borderRadius: "5px" }} id="d-5" />
                            </div>
                        </div>
                    </li>
                    <li id="li-6" className='list-6'>
                        <div className="text"
                            spellCheck="false"
                            id="d-6"
                        >
                            <div className="img-container" id="d-6">
                                <img src={data[5].image} alt="" style={{ height: "100%", width: "100%", borderRadius: "5px" }} id="d-6" />
                            </div>
                        </div>
                    </li>
                    <li id="li-7" className='list-7'>
                        <div className="text"
                            spellCheck="false"
                            id="d-7"
                        >
                            <div className="img-container" id="d-7">
                                <img src={data[6].image} alt="" style={{ height: "100%", width: "100%", borderRadius: "5px" }} id="d-7" />
                            </div>
                        </div>
                    </li>
                    <li id="li-8" className='list-8'>
                        <div className="text"
                            spellCheck="false"
                            id="d-8"
                        >
                            <div className="img-container" id="d-8">
                                <img src={data[7].image} alt="" style={{ height: "100%", width: "100%", borderRadius: "5px" }} id="d-8" />
                            </div>
                        </div>
                    </li>
                </ul>



                {openModalState === true && <ModalRuleta open={openModalState} data={dataForModal} close={closeModal}></ModalRuleta>}
            </div>
        </div>
    )
}

export default Ruleta