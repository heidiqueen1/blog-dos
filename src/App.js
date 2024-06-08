import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'> 
      <h1>Mi blog personal</h1>
    
      < Testimonio
       nombre ='¿Cómo transformar una pérdida en algo valioso?'
       id = 'N°1'
       imagen ='uno'
       testimonio ='Durante mucho tiempo, me enfrenté al temido síndrome de la hoja en blanco. No sabía cómo transformar lo que podría haber sido la segunda crisis de mi vida en una experiencia que me impulsara hacia la evolución. Sin embargo, con el paso del tiempo y tras despedirme de mi padre en este plano terrenal hace pocos días, una puerta se abrió ante mí...'
       />
       < Testimonio
       nombre ='Más allá de las cifras: El papel de las empresas en el desarrollo de las mujeres en tecnología'
       id = 'N°2'
       imagen ='dos'
       testimonio ='Desde el 2021, decidí adentrarme en el mundo profesional de la tecnología. Aunque no tenía una dirección clara en mente en ese momento, ya había tomado la decisión de avanzar, recordando que una decisión tomada es poder. ...'
       />
      

      </div>
      <h2>By Heidi Sánchez</h2>
      
    </div>
  );
}

export default App;
