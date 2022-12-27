import React, { useEffect , useState } from 'react'
// import ‘../../styles/clock.scss’;


export default function Clock () {

    const [estado, setEstado] =  useState({
        // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        edad: 0,
        nombre: 'Abraham',
        apellidos: 'Quintana'
    })

    useEffect(() =>{
        const timerID = setInterval (
            () => tick(), 1000
        );
        return() => {
            clearInterval (timerID);
        }
    })

    const tick = (() => {
        const age = estado.edad + 1;
        setEstado({
            ...estado,
            fecha: new Date(),
            edad: age
        })
        
    });
    

    return (
        <div>
            <h2>
                Hora Actual: {estado.fecha.toLocaleTimeString()}
            </h2>
            <h3>{estado.nombre} {estado.apellidos}</h3>
            <h1>Edad: {estado.edad}</h1>
        </div>
    );
}
