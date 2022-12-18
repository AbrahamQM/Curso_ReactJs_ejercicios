import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Contacto } from '../models/Contacto.class';

function ComponenteB(estado){
    const [conectado, setConectado] = useState(estado);
    return(
        <div>
            <h3>
                {conectado === false ? 'Contacto no Disponible' : 'Contacto En Línea'}
            </h3>
            <button onClick={() => setConectado(!conectado)}>Conectar/Desconectar</button>
        </div>
    );
}


ComponenteB.propTypes = {
    estado: PropTypes.bool,
};
  
  export default ComponenteB;