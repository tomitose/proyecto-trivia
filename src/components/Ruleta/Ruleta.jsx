import React,{useState} from 'react'
import "./Ruleta.css"
const Ruleta = () => {

    const [frase, setFrase] = useState({name : "circle"});
    const data = [
        {id:0, tematica: "Juicio Juntas", image:"-1"},
        {id:1, tematica: "Leyes Obedencia debida y punto", image:"-2"},
        {id:2, tematica: "Vuelta a la Democracia", image:"-3"},
        {id:3, tematica: "Nestor baja los cuadros", image:"-4"},
        {id:4, tematica: "Abuelas recuperando nietos", image:"-5"},
        {id:5, tematica: "Reclamo diplomatico y pacifico por las islas Malvinas", image:"-6"},
        {id:6, tematica: "Primera marcha de las madres de plaza de mayo", image:"-7"},
        {id:7, tematica: "Recuperacion de centros de memoria", image:"-8"}
    ]



    const startRotation = () => {
        
        
        let num = Math.floor(Math.random() * 8);
        console.log(data[num])
        setFrase({
            name:"circle start-rotate"
        })
        setTimeout(() => {
            setFrase({
                name:"circle start-rotate stop-rotate"
            }) 
        },1050)
    };

    return (
        <div>
            <div className="arrow"></div>
            <ul className={frase.name}>
                <li>
                    <div className="text"
                        contentEditable="true"
                        spellCheck="false"
                        suppressContentEditableWarning={true}>1</div>
                </li>
                <li>
                    <div className="text"
                        contentEditable="true"
                        spellCheck="false"
                        suppressContentEditableWarning={true}>2</div>
                </li>
                <li>
                    <div className="text"
                        contentEditable="true"
                        spellCheck="false"
                        suppressContentEditableWarning={true}>3</div>
                </li>
                <li>
                    <div className="text"
                        contentEditable="true"
                        spellCheck="false"
                        suppressContentEditableWarning={true}>4</div>
                </li>
                <li>
                    <div className="text"
                        contentEditable="true"
                        spellCheck="false"
                        suppressContentEditableWarning={true}>5</div>
                </li>
                <li>
                    <div className="text"
                        contentEditable="true"
                        spellCheck="false"
                        suppressContentEditableWarning={true}>6</div>
                </li>
                <li>
                    <div className="text"
                        contentEditable="true"
                        spellCheck="false"
                        suppressContentEditableWarning={true}>7</div>
                </li>
                <li>
                    <div className="text"
                        contentEditable="true"
                        spellCheck="false"
                        suppressContentEditableWarning={true}>8</div>
                </li>
            </ul>
            <button className='spin-button' onClick={() => startRotation()}>SPIN</button>
        </div>
    )
}

export default Ruleta