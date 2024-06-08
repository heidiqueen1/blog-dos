import React from 'react';
import '../hojas-de-estilo/Boton.css';


function Boton() {
    const handleButtonClick = () => {
      window.location.href = 'https://www.linkedin.com/in/heidi-s%C3%A1nchez-qa/';
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