import React from 'react';
import '../hojas-de-estilo/Testimonio.css';
import Boton from './Boton';




function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio'
      src={require(`../imagenes/pexels-${props.imagen}.jpg`)}
      alt='Foto de playa'
      />
      <div id='contenedor-art' className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'> {props.nombre} </p>
        <p className='cargo-testimonio'> {props.id} </p>
        <p className='texto-testimonio'> {props.testimonio} </p>
        <Boton url = {props.url} />
        

      </div>
      
      
    </div>
    
  )

}




export default Testimonio;