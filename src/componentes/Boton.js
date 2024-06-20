import React from 'react';
import '../hojas-de-estilo/Boton.css';


function Boton({url}) {
    const handleButtonClick = () => {
      window.location.href = url ;
    };
  
    return (
      <div>
        <button id='button-linkedin' className='boton' onClick={handleButtonClick}>
          Leer más
        </button>
      </div>
    );
  }
  
  export default Boton;