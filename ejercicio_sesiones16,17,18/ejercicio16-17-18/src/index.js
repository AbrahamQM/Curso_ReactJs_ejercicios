import React from 'react';
import ReactDOM from 'react-dom';

// Añadimos Bootstrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// ! Importante: los estilos propios, deben ir debajo del bootstrap para que no los pise.
import './index.css';

import AppRouting from './AppRouting'

ReactDOM.render(
  <React.StrictMode>
    <AppRouting />
  </React.StrictMode>,
  document.getElementById('root')
);

