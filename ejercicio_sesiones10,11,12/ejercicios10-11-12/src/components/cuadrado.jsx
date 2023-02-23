import React, { useState } from 'react'

let nIntervId = false;

export default function Cuadrado() {
    let color = 'black' ;
    var red; 
    var green; 
    var blue;
    const initialStyle = {width:'255px', height:'255px', backgroundColor:color}
    
    const [styleToUse, setStyleToUse] = useState(initialStyle)

    function randomColor (){
        red = Math.floor(Math.random() * 256) 
        green = Math.floor(Math.random() * 256) 
        blue = Math.floor(Math.random() * 256)
        color = `rgb(${red},${green},${blue})`;
        setStyleToUse({width:'255px', height:'255px', backgroundColor:color})
    }

    function changeColor() {  
        if (nIntervId == false) {
            nIntervId = setInterval(randomColor, 1000);
        }else{
            console.log('Ya se habia iniciado')
        }
    }

    function stopChangeColor(){
        clearInterval(nIntervId);
        console.log('Intevalo limpiado')
        nIntervId = false;
    }

    return (
        <div style={ styleToUse }
            onMouseOver={() => changeColor() }
            onMouseOut={() => stopChangeColor()}
            onDoubleClick={() => stopChangeColor()}
        ></div> 
    )
}
