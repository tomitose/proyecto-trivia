import React, { useState } from 'react'
import ModalRuleta from './Modal/ModalRuleta';
import "./Ruleta.css"
const Ruleta = () => {

    const [frase, setFrase] = useState({ name: "circle" }); //Buscar reset despues de cada blick en boton
    const [dataForModal, setDataForModal] = useState({ id: 0, tematica: "", image: "" });
    const [openModalState, setOpenModalState] = useState(false);

    const closeModal = () => {
        setOpenModalState(false)
        setFrase({
            name: "circle"
        })
    }

    const data = [
        { id: 1, tematica: "Juicio Juntas", image: "/img/ruletaImagenes/tematica1.jpg", opt1: "Juicio Juntas", opt2: "Diputados de la Nacion recibiendo distinción", opt3: "Juicio por las Malvinas" },
        { id: 2, tematica: "Leyes Obedencia debida y punto", image: "/img/ruletaImagenes/tematica2.jpg", opt1: "Leyes Obedencia debida y punto", opt2: "Menem asume la presidencia", opt3: "Oficiales Armadas presentandose ante la nación" },
        { id: 3, tematica: "Vuelta a la Democracia", image: "/img/ruletaImagenes/tematica3.jpg", opt1: "Vuelta a la democracia", opt2: "Creacion de la nueva bandera Argentina", opt3: "Presidente de Estados Unidos visita la casa Rosada" },
        { id: 4, tematica: "Nestor Kirchner baja los cuadros de la dictadura", image: "/img/ruletaImagenes/tematica4.jpg", opt1: "Nestor Kirchner baja los cuadros de la dictadura", opt2: "Nestor Kirchner cuelga cuadros de los presidentes Argentinos faltantes", opt3: "Nestor Kirchner baja los cuadros para reenmarcarlos" },
        { id: 5, tematica: "Abuela recuperando un nieto desaparecido en la dictadura", image: "/img/ruletaImagenes/tematica5.jpg", opt1: "Abuela recuperando un nieto desaparecido en la dictadura", opt2: "Dos personas festejando la vuelta a la democracia", opt3: "Madre y hijo con una foto por el dia de la madre" },
        { id: 6, tematica: "Reclamo diplomatico y pacifico por las islas Malvinas", image: "/img/ruletaImagenes/tematica6.jpg", opt1: "Reclamo diplomatico y pacifico por las islas Malvinas", opt2: "Foto de las Islas Malvinas sacadas por un turista", opt3: "Foto del pacifico Argentino" },
        { id: 7, tematica: "Primera marcha de las madres de plaza de mayo", image: "/img/ruletaImagenes/tematica7.jpg", opt1: "Primera marcha de las madres de plaza de mayo", opt2: "Madres cortando la calle por falta de luz", opt3: "Madres festejando la vuelta a la democracia" },
        { id: 8, tematica: "Remodelacion de centros de detencion de la dictadura", image: "/img/ruletaImagenes/tematica8.jpg", opt1: "Remodelacion de centros de detencion de la dictadura", opt2: "Museo de arte de Buenos Aires", opt3: "Muestra de fotos en Berlin" },
    ]

    const assignTimeById = (id) => {
        let result;

        switch (id) {
            case 1:
                result = 1200;
                break;
            case 2:
                result = 1050;
                break;
            case 3:
                result = 900;
                break;
            case 4:
                result = 1800;
                break;
            case 5:
                result = 2700;
                break;
            case 6:
                result = 1550;
                break;
            case 7:
                result = 2400;
                break;
            case 8:
                result = 2300;
                break;
            default:
                return console.log("error assignTimeById");
        }
        return result;
    }

    const startRotation = () => {

        let num = Math.floor(Math.random() * 8);

        setDataForModal(data[num]);

        const duration = assignTimeById(data[num].id)

        setFrase({
            name: "circle start-rotate"
        })
        setTimeout(() => {
            setFrase({
                name: "circle start-rotate stop-rotate"
            })
            setOpenModalState(true)
        }, duration)

        num = 0;

    };



    return (
        <div>
            <div className="arrow"></div>
            <button className='spin-button' onClick={() => startRotation()}>SP</button>
            <ul className={frase.name}>
                <li>
                    <div className="text"
                        contentEditable="true"
                        spellCheck="false"
                        suppressContentEditableWarning={true}>
                        <div className="img-container">
                            <img src={data[0].image} alt="" style={{ height: "100%", width: "100%" }} />
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text"
                        contentEditable="true"
                        spellCheck="false"
                        suppressContentEditableWarning={true}>
                        <div className="img-container">
                            <img src={data[1].image} alt="" style={{ height: "100%", width: "100%" }} />
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text"
                        contentEditable="true"
                        spellCheck="false"
                        suppressContentEditableWarning={true}>
                        <div className="img-container">
                            <img src={data[2].image} alt="" style={{ height: "100%", width: "100%" }} />
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text"
                        contentEditable="true"
                        spellCheck="false"
                        suppressContentEditableWarning={true}>
                        <div className="img-container">
                            <img src={data[3].image} alt="" style={{ height: "100%", width: "100%" }} />
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text"
                        contentEditable="true"
                        spellCheck="false"
                        suppressContentEditableWarning={true}>
                        <div className="img-container">
                            <img src={data[4].image} alt="" style={{ height: "100%", width: "100%" }} />
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text"
                        contentEditable="true"
                        spellCheck="false"
                        suppressContentEditableWarning={true}>
                        <div className="img-container">
                            <img src={data[5].image} alt="" style={{ height: "100%", width: "100%" }} />
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text"
                        contentEditable="true"
                        spellCheck="false"
                        suppressContentEditableWarning={true}>
                        <div className="img-container">
                            <img src={data[6].image} alt="" style={{ height: "100%", width: "100%" }} />
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text"
                        contentEditable="true"
                        spellCheck="false"
                        suppressContentEditableWarning={true}>
                        <div className="img-container">
                            <img src={data[7].image} alt="" style={{ height: "100%", width: "100%" }} />
                        </div>
                    </div>
                </li>
            </ul>



            {openModalState === true && <ModalRuleta open={openModalState} data={dataForModal} close={closeModal}></ModalRuleta>}
        </div>
    )
}

export default Ruleta