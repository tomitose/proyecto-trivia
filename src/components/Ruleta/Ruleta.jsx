import React,{useState} from 'react'
import "./Ruleta.css"
const Ruleta = () => {

    const [frase, setFrase] = useState({name : "circle"});

    

    const startRotation = () => {
        setFrase({
            name:"circle start-rotate"
        })
        setTimeout(() => {
            setFrase({
                name:"circle start-rotate stop-rotate"
            }) 
        },Math.floor(Math.random() * 10000) + 1)
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
                {/* <li>
                    <div className="text"
                        contentEditable="true"
                        spellCheck="false"
                        suppressContentEditableWarning={true}>9</div>
                </li>
                <li>
                    <div className="text"
                        contentEditable="true"
                        spellCheck="false"
                        suppressContentEditableWarning={true}>10</div>
                </li>
                <li>
                    <div className="text"
                        contentEditable="true"
                        spellCheck="false"
                        suppressContentEditableWarning={true}>11</div>
                </li>
                <li>
                    <div className="text"
                        contentEditable="true"
                        spellCheck="false"
                        suppressContentEditableWarning={true} >12</div>
                </li> */}
            </ul>
            <button className='spin-button' onClick={() => startRotation()}>SPIN</button>
        </div>
    )
}

export default Ruleta